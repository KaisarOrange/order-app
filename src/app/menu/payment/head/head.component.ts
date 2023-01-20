import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-head',
  templateUrl: './head.component.html',
  styleUrls: ['./head.component.scss'],
})
export class HeadComponent {
  @Output() setSwitchView = new EventEmitter();
  onClick() {
    this.setSwitchView.emit();
  }
}
