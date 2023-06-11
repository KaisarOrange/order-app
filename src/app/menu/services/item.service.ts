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
    {
      id: 3,
      name: 'Yoghurt',
      price: 8000,
      resep:
        'Yogurt yang dibuat dari susu segar dan plain yogurt ini memiliki rasa creamy manis yang pasti anda sukai.',

      image: 'assets/img/yoghurt.jpg',
    },
    {
      id: 4,
      name: 'Cookies',
      price: 10000,
      resep: 'Cookies coklat kesukaan kamu.',

      image: 'assets/img/cook.jpg',
    },
  ];
  itema: item[] = [];

  getItems() {
    return this.items;
  }
}
