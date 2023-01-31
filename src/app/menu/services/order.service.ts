import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class OrderService {
  constructor() {}
  order: Array<any> = [];
  item: number = 0;

  pushOrder(
    price: number,
    id: number,
    name: string,
    image: string,
    amount?: number
  ) {
    const check = this.order.some((e) => e.id === id);
    const find = this.order.findIndex((e) => e.id === id);

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
  }

  reduceOrder(id: number) {
    const find = this.order.findIndex((e) => e.id === id);

    this.order[find].amount = this.order[find].amount - 1;

    this.order = this.order.filter((e) => e.amount > 0);

    console.log(this.order);
  }

  renderAmount = (id: number) => {
    const find = this.order.findIndex((e) => e.id === id);
    return find;
  };

  getOrder() {
    return this.order;
  }
}
