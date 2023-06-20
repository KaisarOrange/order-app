import { Injectable } from '@angular/core';
import { item } from '../../Interfaces/item';
import { OrderService } from './order.service';
import { Subscription } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ItemService {
  order: any;
  subscription!: Subscription;
  items: item[] = [
    {
      id: 1,
      name: 'Carbonara',
      price: 25000,
      resep:
        'Pasta dengan saus creamy dari campuran susu, keju, dan kocokan telur ini memiliki rasa gurih manis yang pasti anda sukai.',

      image: 'assets/img/carbo.png',
    },
    {
      id: 2,
      name: 'Chicken Mushroom',
      price: 20000,
      resep:
        'Chicken Mushroom dengan saus creamy dengan campuran jamur,susu,pake butter dan ayam filet yang sudah diolah ini memiliki rasa gurih yang pasti anda sukai.',

      image: 'assets/img/chicken.png',
    },
  ];
  itema: item[] = [];

  getItems() {
    return this.items;
  }
}
