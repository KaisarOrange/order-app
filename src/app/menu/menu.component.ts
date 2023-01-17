import { Component } from '@angular/core';
import { order } from './order';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent {
  menu: boolean = true;
  current: string = 'hello';
  order: Array<any> = [];

  addHello(hello: Array<string>) {
    this.order = hello;
  }
  switchView(menu: boolean) {
    this.menu = menu;
  }
}
