import { orderType } from './order';
import { noteType } from '../menu/services/order.service';

export interface finalOrder {
  name: string;
  number: string;
  adress: string;
  time: any;
  order: orderFinalType[];
}
type orderFinalType = {
  product_id: number;
  quantity: number;
  note: string;
};

export { orderFinalType };
