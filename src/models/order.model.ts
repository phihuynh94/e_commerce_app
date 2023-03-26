export enum OrderStatusEnum {
  Processing = 'processing',
  Shipping = 'shipping',
}

export interface IOrder {
  date: string;
  id: string;
  items: number;
  status: OrderStatusEnum;
  total: number;
}
