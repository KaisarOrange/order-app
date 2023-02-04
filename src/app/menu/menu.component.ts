import { Component, Input } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreCollection,
  AngularFirestoreDocument,
} from '@angular/fire/compat/firestore';
import { Observable, Subscription } from 'rxjs';
import { order } from './order';
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
  private itemsCollection: AngularFirestoreCollection<Item>;
  private deletee: AngularFirestoreDocument<Item>;

  datas: any[] = [];
  subscription!: Subscription;

  addHello(hello: Array<string>) {
    this.order = hello;
  }
  switchView(menu: boolean) {
    this.menu = menu;
  }

  constructor(private itemOrder: OrderService, private afs: AngularFirestore) {
    this.itemsCollection = afs.collection<Item>('items');
    this.items = this.itemsCollection.valueChanges();
    this.deletee = afs.doc<Item>('items/n9AqpviQGInJPPmaJ1us');
  }
  addItem() {
    //  this.itemsCollection.add({ name: 'hello' });
    this.deletee.delete();
  }
}
