import { Component, Input } from '@angular/core';
import items from '../../item';
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent {
  @Input() order: Array<any> = [];
}
