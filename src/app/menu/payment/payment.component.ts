import { Component, EventEmitter, Input, Output } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreCollection,
} from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { OrderService } from '../services/order.service';
import { UserInputService } from '../services/user-input.service';
import { finalOrder, orderFinalType } from './finalOrder';
import { userInfo } from './input/userInfo';
import { orderType } from '../order';

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
    adress: '',
    order: [],
  };

  //private itemsCollection: AngularFirestoreCollection<finalOrder>;

  constructor(
    private orderItem: OrderService,
    private userInput: UserInputService,
    private _router: Router
  ) {
    //this.itemsCollection = this.afs.collection<finalOrder>('order');

    this.subscription = this.orderItem.getSubject().subscribe((res) => {
      this.order = res;
      this.finalOrder.order = res.map(
        ({ product_id, quantity, note }: orderFinalType) => ({
          product_id,
          quantity,
          note,
        })
      );
    });
    this.subscription = this.userInput.getSubject().subscribe((res) => {
      this.finalOrder.name = res.name;
      this.finalOrder.adress = res.address;
      this.finalOrder.number = res.number;
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
    const isEmpty = Object.values(this.finalOrder).some(
      (x) => x === undefined || x === '' || x.length === 0
    );

    const emptyKey = Object.keys(this.finalOrder).filter(
      (key: any, index: number) =>
        Object.values(this.finalOrder)[index] === '' ||
        Object.values(this.finalOrder)[index] === undefined ||
        Object.values(this.finalOrder)[index].length === 0
    );

    if (!isEmpty) {
      //  this.itemsCollection.add(this.finalOrder);
      this.orderItem
        .sendOrder(this.finalOrder)
        .subscribe((res) => console.log(res));
      this._router.navigate(['thank']);
    } else {
      alert('mohon isi input berikut: ' + emptyKey.join(', '));
    }
    console.log(this.finalOrder);
  }
}
