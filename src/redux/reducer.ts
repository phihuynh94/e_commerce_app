import {combineReducers} from '@reduxjs/toolkit';
import authReducer from './auth/auth.reducer';
import bannerReducer from './banner/banner.reducer';
import orderReducer from './order/order.reducer';
import productReducer from './product/product.reducer';

const reducer = combineReducers({
  auth: authReducer,
  banner: bannerReducer,
  order: orderReducer,
  product: productReducer,
});

export type RootState = ReturnType<typeof reducer>;

export default reducer;
