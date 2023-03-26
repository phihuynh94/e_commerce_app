import {IProductState} from './product.state';

export const initialProductState: IProductState = {
  fetchProductsState: {
    fetchingProducts: false,
    fetchingProductsFail: false,
    fetchingProductsSuccess: false,
  },
  products: {},
};
