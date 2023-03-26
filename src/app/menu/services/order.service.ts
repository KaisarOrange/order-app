import { Injectable, OnInit } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class OrderService {
  order: Array<any> = [];
  note: Array<noteType> = [];
  isOrderEmpty: boolean = false;
  private subject = new BehaviorSubject<Object>([]);
  private noteSubject = new BehaviorSubject<Object>([]);
  item: number = 0;

  sendData(data: any) {
    this.subject.next(data);
  }
  sendNote(data: any) {
    this.noteSubject.next(data);
  }
  getNoteSubject(): Observable<any> {
    return this.noteSubject.asObservable();
  }
  getSubject(): Observable<any> {
    return this.subject.asObservable();
  }

  setNote(id: number, name: string) {
    const find = this.note.findIndex((e) => e.id === id);
    const check = this.note.some((e) => e.id === id);
    let hello = this.note[find]?.text;

    if (id < 5) {
      let textNote = prompt('masukan catatan', hello) as string;
      this.note = this.note.filter((e) => e.id != 5);
      if (check === false && textNote != null) {
        this.note.push({ text: textNote, id: id, name: name });
      } else {
        this.note[find].text = textNote;
      }
    } else {
      if (check === false) {
        this.note = this.note.filter((e) => e.id === 5);
        this.note.push({ text: '', id: id, name: name });
      } else {
        this.note[find].text = '';
      }
    }

    this.sendNote(this.note);
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
    if (this.order.length > 0) {
      this.isOrderEmpty = true;
    } else if (this.order.length === 0) {
      this.isOrderEmpty = false;
    }

    this.sendData(this.order);
  }

  reduceOrder(id: number) {
    const find = this.order.findIndex((e) => e.id === id);

    this.order[find].amount = this.order[find].amount - 1;

    this.order = this.order.filter((e) => e.amount > 0);
    if (this.order.length > 0) {
      this.isOrderEmpty = true;
    } else if (this.order.length === 0) {
      this.isOrderEmpty = false;
    }
    this.sendData(this.order);
  }

  renderAmount = (id: number) => {
    const find = this.order.findIndex((e) => e.id === id);
    return find;
  };
}

export interface noteType {
  name: string;
  id: number;
  text: string;
}
