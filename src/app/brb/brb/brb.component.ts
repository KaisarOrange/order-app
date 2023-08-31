import { Component } from '@angular/core';

@Component({
  selector: 'app-brb',
  templateUrl: './brb.component.html',
  styleUrls: ['./brb.component.scss'],
})
export class BrbComponent {
  confirm = () => {
    window.location.href = 'https://www.instagram.com/pastaboys.id/?hl=id';
  };
}
