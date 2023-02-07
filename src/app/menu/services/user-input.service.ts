import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { userInfo } from '../payment/input/userInfo';

@Injectable({
  providedIn: 'root',
})
export class UserInputService {
  userInfo: userInfo = { name: '', address: '', number: '' };

  onKey(event: any) {
    this.userInfo = event;
    this.sendData(this.userInfo);
  }
  constructor() {}
  private subject = new BehaviorSubject<Object>([]);

  sendData(data: any) {
    this.subject.next(data);
  }
  getSubject(): Observable<any> {
    return this.subject.asObservable();
  }
}
