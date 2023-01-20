import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-ringkasan',
  templateUrl: './ringkasan.component.html',
  styleUrls: ['./ringkasan.component.scss'],
})
export class RingkasanComponent {
  @Input() order: Array<any> = [];

  totalAddition = () => {
    const total = this.order.reduce((a, b) => a + b.price * b.amount, 0);
    return total;
  };
}
