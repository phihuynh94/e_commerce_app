import {useAppSelector} from '../hooks';

export const useFetchProductsState = () =>
  useAppSelector(state => state.product.fetchProductsState);

export const useProducts = () =>
  useAppSelector(state => Object.values(state.product.products || {}));
