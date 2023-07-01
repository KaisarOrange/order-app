import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserInputService } from '../../services/user-input.service';
import { userInfo } from '../../../Interfaces/userInfo';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
})
export class InputComponent {
  hello: any;
  userInfo: userInfo = { name: '', address: '', number: '', time: '' };
  constructor(private userInput: UserInputService) {
    this.userInput.getSubject().subscribe((res) => {
      this.userInfo.name = res.name;
      this.userInfo.address = res.address;
      this.userInfo.number = res.number;
      this.userInfo.time = res.time;
    });
  }

  onKey() {
    this.userInput.onKey(this.userInfo);
  }
}
