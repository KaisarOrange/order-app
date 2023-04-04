import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class TestService {
  private subject = new Subject<any>();

  constructor(private http: HttpClient) {}
  //make if statement, if item not exist then push with next
  sendData(data: any) {
    this.subject.next({ text: data });
  }

  getData(): Observable<any> {
    return this.subject.asObservable();
  }
  fetchData() {
    return this.http.get<[]>('/order');
  }
}
