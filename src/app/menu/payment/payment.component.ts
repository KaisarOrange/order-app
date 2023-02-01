import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Subscription } from 'rxjs';
import { OrderService } from '../services/order.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss'],
})
export class PaymentComponent {
  order: Array<any> = [];
  subscription!: Subscription;

  constructor(private orderItem: OrderService) {
    this.subscription = this.orderItem.getSubject().subscribe((res) => {
      this.order = res;
    });
  }
  @Output() switchView = new EventEmitter<boolean>();
  setSwitch() {
    this.switchView.emit(true);
  }
}
