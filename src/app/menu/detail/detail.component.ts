import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs';
import { ItemService } from '../services/item.service';
import { OrderService } from '../services/order.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss'],
})
export class DetailComponent implements OnInit {
  id$ = this.router.paramMap.pipe(map((params) => params.get('id')));
  id: number = 0;
  items: Array<any> = [];

  constructor(
    private router: ActivatedRoute,
    private itemService: ItemService,
    itemOrder: OrderService
  ) {}

  ngOnInit(): void {
    this.id$.subscribe((e) => {
      this.id = Number(e);
    });
    this.items = this.itemService.getItems().filter((e) => e.id === this.id);
  }
}
