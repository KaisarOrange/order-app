import { Component } from '@angular/core';
import { order } from './order';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent {
  current: string = 'hello';
  hello = '';

  addHello(hello: string) {
    this.hello = hello;
  }
}
