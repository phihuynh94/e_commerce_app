import {combineReducers} from '@reduxjs/toolkit';
import authReducer from './auth/auth.reducer';
import productReducer from './product/product.reducer';

const reducer = combineReducers({
  auth: authReducer,
  product: productReducer,
});

export type RootState = ReturnType<typeof reducer>;

export default reducer;
