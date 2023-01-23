import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  @Input() order: Array<any> = [];
  @Input() menu: boolean = false;

  @Output() handleClick = new EventEmitter();
  @Output() setSwitchView = new EventEmitter();
  onClick() {
    this.setSwitchView.emit('clicked a button');
  }

  addOrder(id: number) {
    const find = this.order.findIndex((e) => e.id === id);
    this.order[find].amount = this.order[find].amount + 1;
  }
  reduceOrder(id: number) {
    const find = this.order.findIndex((e) => e.id === id);

    this.order[find].amount = this.order[find].amount - 1;
    this.order = this.order.filter((e) => e.amount > 0);
  }
  setSwitch() {
    this.menu = true;
    console.log(this.menu);
  }

  ngOnInit(): void {
    this.order = this.order.filter((e) => e.amount > 0);
  }
}
