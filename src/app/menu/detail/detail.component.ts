import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, Subscription } from 'rxjs';
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
  order: Array<any> = [];
  subscription!: Subscription;

  constructor(
    private router: ActivatedRoute,
    private itemService: ItemService,
    private orderItem: OrderService
  ) {
    this.subscription = this.orderItem.getSubject().subscribe((res) => {
      this.order = res;
    });
  }

  pushOrder(price: number, id: number, name: string, image: string) {
    this.orderItem.pushOrder(price, id, name, image);
  }

  reduceOrder(id: number) {
    this.orderItem.reduceOrder(id);
  }

  renderAmount = (id: number) => {
    const find = this.orderItem.renderAmount(id);
    return find;
  };
  ngOnInit(): void {
    this.id$.subscribe((e) => {
      this.id = Number(e);
    });
    this.items = this.itemService
      .getItems()
      .filter((e: any) => e.id === this.id);
  }
}
