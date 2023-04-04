import {
  Component,
  EventEmitter,
  Output,
  Input,
  OnChanges,
  SimpleChange,
  SimpleChanges,
} from '@angular/core';
import { Subscription } from 'rxjs';
import { OrderService } from '../services/order.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss'],
})
export class CheckoutComponent implements OnChanges {
  subscription!: Subscription;
  constructor(private orderItem: OrderService) {
    this.subscription = orderItem
      .getSubject()
      .subscribe((e) => (this.order = e));
  }

  order: Array<any> = [];
  cont = 0;

  amountTotal = () => {
    const total = this.order.reduce((a, b) => a + b.quantity, 0);
    return total;
  };
  totalAddition = () => {
    const total = this.order.reduce((a, b) => a + b.price * b.quantity, 0);
    return total;
  };

  ngOnChanges(change: SimpleChanges) {}
}
