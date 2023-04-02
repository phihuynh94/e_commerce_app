import {IOrder} from '../../models/order.model';

export interface IOrderState {
  fetchOrdersState: IFetchOrdersState;
  orders: Record<number, IOrder>;
}

export interface IFetchOrdersState {
  fetchingOrders: boolean;
  fetchingOrdersFail: boolean;
  fetchingOrdersSuccess: boolean;
}
