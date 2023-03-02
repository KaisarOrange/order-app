import { Component, EventEmitter, Input, Output } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreCollection,
} from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { OrderService } from '../services/order.service';
import { UserInputService } from '../services/user-input.service';
import { finalOrder } from './finalOrder';
import { userInfo } from './input/userInfo';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss'],
})
export class PaymentComponent {
  order: Array<any> = [];
  subscription!: Subscription;
  subscriptionUserInput!: Subscription;
  finalOrder: finalOrder = {
    name: '',
    number: '',
    address: '',
    order: [],
    note: [],
  };

  private itemsCollection: AngularFirestoreCollection<finalOrder>;

  constructor(
    private orderItem: OrderService,
    private userInput: UserInputService,
    private afs: AngularFirestore,
    private _router: Router
  ) {
    this.itemsCollection = this.afs.collection<finalOrder>('order');

    this.subscription = this.orderItem.getSubject().subscribe((res) => {
      this.order = res;
      this.finalOrder.order = res;
    });
    this.subscription = this.userInput.getSubject().subscribe((res) => {
      this.finalOrder.name = res.name;
      this.finalOrder.address = res.address;
      this.finalOrder.number = res.number;
    });
    this.subscription = this.orderItem.getNoteSubject().subscribe((res) => {
      this.finalOrder.note = res;
    });
  }
  @Output() switchView = new EventEmitter<boolean>();
  setSwitch() {
    this.switchView.emit(true);
  }

  confirm() {
    let result = confirm('Selesaikan pesanan?');
    if (result) {
      this.log();
    } else {
      return;
    }
  }

  log() {
    if (this.finalOrder.note!?.length < 1 || this.order.length < 1) {
      this.orderItem.setNote(5, 'Tidak ada catatan');
    }

    const isEmpty = Object.values(this.finalOrder).some(
      (x) => x === undefined || x === '' || x.length === 0
    );
    const find = Object.values(this.finalOrder).findIndex(
      (x) => x === undefined || x === '' || x.length === 0
    );
    if (!isEmpty) {
      this.itemsCollection.add(this.finalOrder);
      this._router.navigate(['order']);
    } else {
      alert('mohon isi semua input :D ' + find);
    }
    console.log(this.finalOrder);
  }
}
