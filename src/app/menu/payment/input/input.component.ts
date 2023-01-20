import { Component } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
})
export class InputComponent {
  values = '';

  onKey(event: any) {
    this.values = event.target.value;
  }
}
