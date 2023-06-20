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
      price: 25000,
      resep:
        'Chicken Mushroom dengan saus creamy dengan campuran jamur,susu,pake butter dan ayam filet yang sudah diolah ini memiliki rasa gurih yang pasti anda sukai.',

      image: 'assets/img/chicken.png',
    },
    {
      id: 5,
      name: 'Fettuccine Mushroom',
      price: 25000,
      resep:
        'Fettuccine Mushroom dengan saus creamy khas Pastaboys dengan pasta yang alami homemade.',

      image: 'assets/img/mushroom.jpg',
    },
  ];
  itema: item[] = [];

  getItems() {
    return this.items;
  }
}
