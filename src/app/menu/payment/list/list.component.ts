import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Subscription } from 'rxjs';
import { OrderService } from '../../services/order.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  order: Array<any> = [];
  @Input() menu: boolean = false;
  subscription!: Subscription;

  constructor(private orderItem: OrderService) {
    this.subscription = this.orderItem.getSubject().subscribe((res) => {
      this.order = res;
    });
  }

  addOrder(price: number, id: number, name: string, image: string) {
    // const find = this.order.findIndex((e) => e.id === id);
    // this.order[find].amount = this.order[find].amount + 1;
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

  ngOnInit(): void {
    this.order = this.order.filter((e) => e.amount > 0);
  }
}
