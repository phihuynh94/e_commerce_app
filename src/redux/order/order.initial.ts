import {IOrderState} from './order.state';

export const initialOrderState: IOrderState = {
  fetchOrdersState: {
    fetchingOrders: false,
    fetchingOrdersFail: false,
    fetchingOrdersSuccess: false,
  },
  orders: {},
};
