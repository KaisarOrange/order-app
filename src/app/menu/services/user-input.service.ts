import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { userInfo } from '../payment/input/userInfo';

@Injectable({
  providedIn: 'root',
})
export class UserInputService {
  userInfo: userInfo = { name: '', address: '', number: '' };

  onKey(event: any, index: number) {
    if (index === 1) {
      this.userInfo.name = event;
    }
    if (index === 2) {
      this.userInfo.number = event;
    }
    if (index === 3) {
      this.userInfo.address = event;
    }

    this.sendData(this.userInfo);
  }

  private subject = new BehaviorSubject<Object>([]);

  sendData(data: any) {
    this.subject.next(data);
  }
  getSubject(): Observable<any> {
    return this.subject.asObservable();
  }
}
