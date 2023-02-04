import { Injectable, OnInit } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class OrderService {
  order: Array<any> = [];
  private subject = new BehaviorSubject<Object>([]);
  item: number = 0;

  sendData(data: any) {
    this.subject.next(data);
  }
  getSubject(): Observable<any> {
    return this.subject.asObservable();
  }
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
    this.sendData(this.order);
  }

  reduceOrder(id: number) {
    const find = this.order.findIndex((e) => e.id === id);

    this.order[find].amount = this.order[find].amount - 1;

    this.order = this.order.filter((e) => e.amount > 0);

    this.sendData(this.order);
  }

  renderAmount = (id: number) => {
    const find = this.order.findIndex((e) => e.id === id);
    return find;
  };
}
