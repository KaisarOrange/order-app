import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Subscription } from 'rxjs';
import { OrderService } from '../services/order.service';
import { UserInputService } from '../services/user-input.service';
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
  finalOrder: any = {
    name: '',
    number: '',
    address: '',
    order: [],
  };
  constructor(
    private orderItem: OrderService,
    private userInput: UserInputService
  ) {
    this.subscription = this.orderItem.getSubject().subscribe((res) => {
      this.order = res;
      this.finalOrder.order = res;
    });
    this.subscription = this.userInput.getSubject().subscribe((res) => {
      this.finalOrder.name = res.name;
      this.finalOrder.address = res.address;
      this.finalOrder.number = res.number;
    });
  }
  @Output() switchView = new EventEmitter<boolean>();
  setSwitch() {
    this.switchView.emit(true);
  }

  addUserInput(input: any) {}

  log() {
    console.log(this.finalOrder);
  }
}
