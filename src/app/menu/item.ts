interface item {
  id: number;
  name: string;
  price: number;
  resep: string;

  image: string;
}

const items: item[] = [
  {
    id: 1,
    name: 'Carbonara',
    price: 25000,
    resep: 'Keju enak dari susu',

    image: '/assets/img/carbo.png',
  },
  {
    id: 2,
    name: 'Chicken Mushroom',
    price: 20000,
    resep: 'Nasi chicken mushroom dari jamur asli',

    image: '/assets/img/chicken.png',
  },
  {
    id: 3,
    name: 'Yoghurt',
    price: 8000,
    resep: 'Yoghurt sehat',

    image: '/assets/img/yog.png',
  },
  {
    id: 4,
    name: 'Cookies',
    price: 10000,
    resep: 'Cookies coklat',

    image: '/assets/img/cook.jpg',
  },
];

export default items;
