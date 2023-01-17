import { Component, Input, Output, EventEmitter } from '@angular/core';
import { aid } from './id';
import { item } from './item';
import { order } from '../order';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss'],
})
export class CardsComponent {
  items: item[] = [
    {
      id: 1,
      name: 'Carbonara',
      price: 25000,
      resep: 'Keju enak dari susu',
      amount: 0,
      image: '/assets/img/carbo.png',
    },
    {
      id: 2,
      name: 'Chicken Mushroom',
      price: 20000,
      resep: 'Nasi chicken mushroom dari jamur asli',
      amount: 0,
      image: '/assets/img/chicken.png',
    },
    {
      id: 3,
      name: 'Yoghurt',
      price: 8000,
      resep: 'Yoghurt sehat',
      amount: 0,
      image: '/assets/img/yog.png',
    },
    {
      id: 4,
      name: 'Cookies',
      price: 10000,
      resep: 'Cookies coklat',
      amount: 0,
      image: '/assets/img/cook.jpg',
    },
  ];

  order: order[] = [];

  @Output() newItemEvent = new EventEmitter<any>();

  pushOrder(price: number, id: number, name: string, amount?: number) {
    const check = this.order.some((e) => e.id === id);
    const find = this.order.findIndex((e) => e.id === id);
    const findItem = this.items.findIndex((e) => e.id === id);

    if (check === false) {
      this.order.push({
        price: price,
        id: id,
        name: name,
        amount: 1,
      });

      this.items[findItem].amount = this.items[findItem].amount + 1;
    } else {
      this.order[find].amount = this.order[find].amount + 1;
      this.items[findItem].amount = this.items[findItem].amount + 1;
    }
    this.addOut();
  }

  reduceOrder(id: number) {
    const find = this.order.findIndex((e) => e.id === id);
    const findItem = this.items.findIndex((e) => e.id === id);

    this.items[findItem].amount = this.items[findItem].amount - 1;
    this.order[find].amount = this.order[find].amount - 1;

    if (this.order[find].amount === 0) {
      this.order = this.order.filter((e) => e.amount > 0);
    }
    this.addOut();
    console.log(this.order);
  }

  addOut() {
    this.newItemEvent.emit(this.order);
  }
  log() {
    console.log(this.order);
  }
  count: number = 0;
}
