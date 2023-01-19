import { Component, Input, Output, EventEmitter } from '@angular/core';
import { aid } from './id';
import items from '../item';
import { order } from '../order';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss'],
})
export class CardsComponent {
  items = items;

  @Output() newItemEvent = new EventEmitter<any>();

  @Input() order: Array<any> = [];

  pushOrder(
    price: number,
    id: number,
    name: string,
    image: string,
    amount?: number
  ) {
    const check = this.order.some((e) => e.id === id);
    const find = this.order.findIndex((e) => e.id === id);
    const findItem = this.items.findIndex((e) => e.id === id);

    if (check === false) {
      this.order.push({
        price: price,
        id: id,
        name: name,
        amount: 1,
        image: image,
      });
    } else {
      this.order[find].amount = this.order[find].amount + 1;
    }
    this.addOut();
  }

  reduceOrder(id: number) {
    const find = this.order.findIndex((e) => e.id === id);
    const findItem = this.items.findIndex((e) => e.id === id);

    this.order[find].amount = this.order[find].amount - 1;

    this.order = this.order.filter((e) => e.amount > 0);

    this.addOut();
    console.log(this.order);
  }

  renderAmount = (id: number) => {
    const find = this.order.findIndex((e) => e.id === id);
    return find;
  };

  addOut() {
    this.newItemEvent.emit(this.order);
  }
  log() {
    console.log(this.order);
  }
}
