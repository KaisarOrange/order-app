import { Component, Input } from '@angular/core';
import { order } from './order';
import { OrderService } from './services/order.service';

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

  constructor(private itemOrder: OrderService) {}
}
