import {
  Component,
  EventEmitter,
  Output,
  Input,
  OnChanges,
} from '@angular/core';

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
  @Input() order: Array<any> = [];

  cont = 0;

  amountTotal = () => {
    const total = this.order.reduce((a, b) => a + b.amount, 0);
    return total;
  };
  totalAddition = () => {
    const total = this.order.reduce((a, b) => a + b.price * b.amount, 0);
    return total;
  };

  updateItem = () => {
    if (this.order.length > 0) {
      console.log('hello' + this.order);
    }
  };
  ngOnChanges() {
    this.updateItem();
  }
}
