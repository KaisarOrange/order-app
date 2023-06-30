import { orderType } from './order';
import { noteType } from '../menu/services/order.service';

export interface finalOrder {
  name: string;
  number: string;
  adress: string;
  time: string;
  order: orderFinalType[];
}
type orderFinalType = {
  product_id: number;
  quantity: number;
  note: string;
};

export { orderFinalType };
