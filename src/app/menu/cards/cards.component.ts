import { Component } from '@angular/core';
import { aid } from './id';
import { item } from './item';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss'],
})
export class CardsComponent {
  items: item[] = [
    {
      id: 1,
      name: 'Carbonara',
      price: 25000,
      resep: 'Keju enak dari susu',
      amount: 0,
      image: '/assets/img/carbo.png',
    },
    {
      id: 2,
      name: 'Chicken Mushroom',
      price: 20000,
      resep: 'Nasi chicken mushroom dari jamur asli',
      amount: 0,
      image: '/assets/img/chicken.png',
    },
    {
      id: 2,
      name: 'Chicken Mushroom',
      price: 20000,
      resep: 'Nasi chicken mushroom dari jamur asli',
      amount: 0,
      image: '/assets/img/chicken.png',
    },
    {
      id: 2,
      name: 'Chicken Mushroom',
      price: 20000,
      resep: 'Nasi chicken mushroom dari jamur asli',
      amount: 0,
      image: '/assets/img/chicken.png',
    },
  ];
}
