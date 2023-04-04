import { orderType } from '../order';
import { noteType } from '../services/order.service';

export interface finalOrder {
  name: string;
  number: string;
  adress: string;
  order: orderFinalType[];
}
type orderFinalType = {
  product_id: number;
  quantity: number;
  note: string;
};

export { orderFinalType };
