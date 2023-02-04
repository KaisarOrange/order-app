import { Component, EventEmitter, Output } from '@angular/core';
import { UserInputService } from '../../services/user-input.service';
import { userInfo } from './userInfo';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
})
export class InputComponent {
  values = '';
  userInfo: userInfo = { name: '', address: '', number: '' };

  name = this.userInput.userInfo.name;
  address = this.userInput.userInfo.address;
  number = this.userInput.userInfo.number;
  constructor(private userInput: UserInputService) {}

  onKey(event: any, index: number) {
    this.userInput.onKey(event, index);
  }
}
