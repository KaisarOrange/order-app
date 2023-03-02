import { noteType } from '../services/order.service';
export interface finalOrder {
  name: string;
  number: string;
  address: string;
  order?: [];
  note?: Array<noteType>;
}
