import { Component, Input } from '@angular/core';
import { Subscription } from 'rxjs';
import { order } from './order';
import { OrderService } from './services/order.service';
import { TestService } from './services/test.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent {
  menu: boolean = true;
  current: string = 'hello';
  order: Array<any> = [];

  datas: any[] = [];
  subscription!: Subscription;

  addHello(hello: Array<string>) {
    this.order = hello;
  }
  switchView(menu: boolean) {
    this.menu = menu;
  }

  constructor(private itemOrder: OrderService, private test: TestService) {
    this.subscription = this.test.getData().subscribe((res) => {
      if (res) {
        this.datas.push(res);
      } else {
        this.datas = [];
      }
    });
  }
}
