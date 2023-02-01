import { Component, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { Subscription } from 'rxjs';
import { ItemService } from '../services/item.service';
import { OrderService } from '../services/order.service';
import { TestService } from '../services/test.service';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss'],
})
export class CardsComponent {
  items = this.itemService.getItems();

  order: Array<any> = [];
  subscription!: Subscription;
  constructor(
    private itemService: ItemService,
    private orderItem: OrderService
  ) {
    this.subscription = orderItem.getSubject().subscribe((res) => {
      this.order = res;
    });
  }

  pushOrder(price: number, id: number, name: string, image: string) {
    this.orderItem.pushOrder(price, id, name, image);
  }

  reduceOrder(id: number) {
    this.orderItem.reduceOrder(id);
  }

  renderAmount = (id: number) => {
    const find = this.orderItem.renderAmount(id);
    return find;
  };
}
