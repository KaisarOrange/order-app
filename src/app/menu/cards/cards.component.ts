import { Component, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { ItemService } from '../services/item.service';
import { OrderService } from '../services/order.service';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss'],
})
export class CardsComponent implements OnInit, OnChanges {
  items = this.itemService.getItems();

  order: Array<any> = [];

  constructor(
    private itemService: ItemService,
    private orderItem: OrderService
  ) {}

  pushOrder(price: number, id: number, name: string, image: string) {
    this.orderItem.pushOrder(price, id, name, image);
    this.order = this.orderItem.getOrder();
  }

  reduceOrder(id: number) {
    this.orderItem.reduceOrder(id);
    this.order = this.orderItem.getOrder();
  }

  renderAmount = (id: number) => {
    const find = this.orderItem.renderAmount(id);
    return find;
  };

  log(id: number) {
    console.log(this.renderAmount(id));
  }
  ngOnInit(): void {
    this.order = this.orderItem.getOrder();
  }
  ngOnChanges(changes: SimpleChanges): void {}
}
