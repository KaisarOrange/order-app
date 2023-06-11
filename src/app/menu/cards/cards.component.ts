import { Component, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { Subscription } from 'rxjs';
import { ItemService } from '../services/item.service';
import { OrderService } from '../services/order.service';
import { orderType } from 'src/app/Interfaces/order';
import { item } from 'src/app/Interfaces/item';
import { orderFinalType } from 'src/app/Interfaces/finalOrder';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss'],
})
export class CardsComponent {
  items: item[] = [];

  order: orderType[] = [];
  subscription!: Subscription;
  constructor(
    private itemService: ItemService,
    private orderItem: OrderService
  ) {
    this.subscription = orderItem.getSubject().subscribe((res) => {
      this.order = res;
    });
    this.items = this.itemService.getItems();
  }

  getNote(id: number) {
    this.orderItem.setNote(id);
  }

  pushOrder(price: number, id: number, name: string, image: string) {
    this.orderItem.pushOrder(price, id, name, image);
  }

  renderAmount = (id: number) => {
    const find = this.orderItem.renderAmount(id);
    if (this.order[find]) {
      return this.order[find]?.quantity;
    } else {
      return 0;
    }
  };

  reduceOrder(id: number) {
    this.orderItem.reduceOrder(id);
  }
}
