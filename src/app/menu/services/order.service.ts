import { Injectable, OnInit } from '@angular/core';
import { BehaviorSubject, Observable, Subject, catchError } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { finalOrder } from '../../Interfaces/finalOrder';
import { orderType } from '../../Interfaces/order';
import { ItemService } from './item.service';
import { item } from '../../Interfaces/item';
@Injectable({
  providedIn: 'root',
})
export class OrderService {
  order: orderType[] = [];
  realOrder: any = [];
  note: Array<noteType> = [];
  items: orderType[] = [];

  isOrderEmpty: boolean = false;
  private subject = new BehaviorSubject<Object>([]);

  constructor(private http: HttpClient, private itemService: ItemService) {}
  sendData(data: any) {
    this.subject.next(data);
  }

  getSubject(): Observable<any> {
    return this.subject.asObservable();
  }

  setNote(id: number) {
    const find = this.order.findIndex((e) => e.product_id === id);

    let textNote = prompt('masukan catatan', this.order[find].note) as string;

    this.order[find].note = textNote;
  }

  pushOrder(
    price: number,
    id: number,
    name: string,
    image: string,
    amount?: number
  ) {
    const check = this.order.some((e) => e.product_id === id);
    const find = this.order.findIndex((e) => e.product_id === id);

    if (check === false) {
      this.order.push({
        price: price,
        product_id: id,
        name: name,
        quantity: 1,
        image: image,
      });
    } else {
      this.order[find].quantity = this.order[find].quantity + 1;
    }
    if (this.order.length > 0) {
      this.isOrderEmpty = true;
    } else if (this.order.length === 0) {
      this.isOrderEmpty = false;
    }
    this.sendData(this.order);
  }

  reduceOrder(id: number) {
    const find = this.order.findIndex((e) => e.product_id === id);

    this.order[find].quantity = this.order[find].quantity - 1;

    this.order = this.order.filter((e) => e.quantity > 0);
    if (this.order.length > 0) {
      this.isOrderEmpty = true;
    } else if (this.order.length === 0) {
      this.isOrderEmpty = false;
    }
    this.sendData(this.order);
  }

  renderAmount = (id: number) => {
    const find = this.order.findIndex((e) => e.product_id === id);
    return find;
  };

  sendOrder(body: finalOrder): Observable<finalOrder> {
    return this.http.post<finalOrder>(
      'https://pastaboys-backend-production.up.railway.app/order/pesan',
      body
    );
  }
}

export interface noteType {
  name: string;
  id: number;
  text: string;
}
