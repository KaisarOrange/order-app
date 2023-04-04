import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Subscription } from 'rxjs';
import { OrderService } from '../../services/order.service';
import { orderType } from '../../order';
import { ItemService } from '../../services/item.service';
import { item } from '../../item';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  @Input() menu: boolean = false;
  order: Array<any> = [];
  items: item[] = [];
  subscription!: Subscription;

  constructor(
    private orderItem: OrderService,
    private itemService: ItemService
  ) {
    this.subscription = this.orderItem.getSubject().subscribe((res) => {
      this.order = res;
    });
  }

  addOrder(price: number, id: number, name: string, image: string) {
    this.orderItem.pushOrder(price, id, name, image);
  }
  reduceOrder(id: number) {
    // const find = this.order.findIndex((e) => e.id === id);

    // this.order[find].amount = this.order[find].amount - 1;
    // this.order = this.order.filter((e) => e.amount > 0);

    this.orderItem.reduceOrder(id);
  }
  setSwitch() {
    this.menu = true;
    console.log(this.menu);
  }
  test() {
    console.log(this.order);
  }

  getNote(id: number) {
    this.orderItem.setNote(id);
  }

  ngOnInit(): void {
    this.order = this.order.filter((e) => e.quantity > 0);
  }
}
