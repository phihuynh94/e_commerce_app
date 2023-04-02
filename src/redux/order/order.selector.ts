import {useAppSelector} from '../hooks';

export const useFetchOrdersState = () =>
  useAppSelector(state => state.order.fetchOrdersState);

export const useOrders = () =>
  useAppSelector(state => Object.values(state.order.orders || {}));
