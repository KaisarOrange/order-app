import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss'],
})
export class PaymentComponent {
  @Input() menu: boolean = false;

  @Output() notifyGrandParent = new EventEmitter();
  childEvent(event: any) {
    this.notifyGrandParent.emit('event');
  }

  @Input() order: Array<any> = [];
  @Output() switchView = new EventEmitter<boolean>();
  setSwitch() {
    this.switchView.emit(true);
  }
}
