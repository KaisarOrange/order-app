import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { OrderService } from '../services/order.service';
import { orderType } from 'src/app/Interfaces/order';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss'],
})
export class CheckoutComponent {
  order: Array<orderType> = [];
  cont = 0;
  subscription!: Subscription;

  constructor(private orderItem: OrderService) {
    this.subscription = orderItem
      .getSubject()
      .subscribe((e) => (this.order = e));
  }

  amountTotal = () => {
    const total = this.order.reduce((a, b) => a + b.quantity, 0);
    return total;
  };
  totalAddition = () => {
    const total = this.order.reduce((a, b) => a + b.price * b.quantity, 0);
    return total;
  };
}
