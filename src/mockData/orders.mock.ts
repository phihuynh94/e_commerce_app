import {IOrder, OrderStatusEnum} from '../models/order.model';

export const orders: IOrder[] = [
  {
    date: 'August 1, 2022',
    id: 'LQNSU346JK',
    items: 2,
    status: OrderStatusEnum.Shipping,
    total: 300,
  },
  {
    date: 'August 1, 2022',
    id: 'LQNSU346JK',
    items: 2,
    status: OrderStatusEnum.Processing,
    total: 300,
  },
];
