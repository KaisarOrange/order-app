import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { UserInputService } from '../../services/user-input.service';
import { userInfo } from './userInfo';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
})
export class InputComponent implements OnInit {
  values = 'hai';
  userInfo: userInfo = { name: '', address: '', number: '' };

  name: string = 'Alif';
  address: string = '';
  number: string = '';
  constructor(private userInput: UserInputService) {
    this.userInput.getSubject().subscribe((res) => {
      this.userInfo.name = res.name;

      this.userInfo.address = res.address;
      this.userInfo.number = res.number;
    });
  }

  onKey() {
    this.userInput.onKey(this.userInfo);
  }

  ngOnInit(): void {}
}
