import {
  Component,
  EventEmitter,
  Output,
  Input,
  OnChanges,
  SimpleChange,
  SimpleChanges,
} from '@angular/core';
import { OrderService } from '../services/order.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss'],
})
export class CheckoutComponent implements OnChanges {
  @Output() switchView = new EventEmitter<boolean>();
  setSwitch() {
    this.switchView.emit(false);
  }

  constructor(private orderItem: OrderService) {}

  order: Array<any> = this.orderItem.getOrder();
  cont = 0;

  amountTotal = () => {
    const total = this.order.reduce((a, b) => a + b.amount, 0);
    return total;
  };
  totalAddition = () => {
    const total = this.order.reduce((a, b) => a + b.price * b.amount, 0);
    return total;
  };

  ngOnChanges(change: SimpleChanges) {}
}
