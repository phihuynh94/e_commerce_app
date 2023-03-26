import {IProduct} from '../../models/product.model';

export interface IProductState {
  fetchProductsState: IFetchProductsState;
  products: Record<number, IProduct>;
}

export interface IFetchProductsState {
  fetchingProducts: boolean;
  fetchingProductsFail: boolean;
  fetchingProductsSuccess: boolean;
}
