import { Component, Input } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreCollection,
  AngularFirestoreDocument,
} from '@angular/fire/compat/firestore';
import { Observable, Subscription } from 'rxjs';

import { OrderService } from './services/order.service';
import { TestService } from './services/test.service';
export interface Item {
  name: string;
}
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent {
  menu: boolean = true;
  current: string = 'hello';
  order: Array<any> = [];
  items!: Observable<Item[]>;
  orderExist: boolean = false;
  testpa: string[] = [];
  private itemsCollection: AngularFirestoreCollection<Item>;
  private deletee: AngularFirestoreDocument<Item>;
  constructor(
    private itemOrder: OrderService,
    private afs: AngularFirestore,
    private testp: TestService
  ) {
    this.testp.fetchData().subscribe((res) => {
      this.testpa = res;
    });
    this.itemsCollection = afs.collection<Item>('items');
    this.items = this.itemsCollection.valueChanges();
    this.deletee = afs.doc<Item>('items/n9AqpviQGInJPPmaJ1us');
    this.subscription = this.itemOrder.getSubject().subscribe((res) => {
      this.orderExist = this.itemOrder.isOrderEmpty;
    });
  }
  datas: any[] = [];
  subscription!: Subscription;

  addHello(hello: Array<string>) {
    this.order = hello;
  }
  switchView(menu: boolean) {
    this.menu = menu;
  }

  addItem() {
    //  this.itemsCollection.add({ name: 'hello' });

    console.log(this.orderExist, this.itemOrder.isOrderEmpty);
  }
}
