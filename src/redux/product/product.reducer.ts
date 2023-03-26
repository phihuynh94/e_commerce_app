import {createReducer} from '@reduxjs/toolkit';
import {fetchProducts} from './product.action';
import {initialProductState} from './product.initial';

const productReducer = createReducer(initialProductState, builder => {
  builder
    // Fetch Products
    .addCase(fetchProducts.fulfilled, (state, {payload}) => {
      return {
        ...state,
        fetchProductsState: {
          fetchingProducts: false,
          fetchingProductsFail: false,
          fetchingProductsSuccess: true,
        },
        products: {
          ...payload.reduce((acc, cur) => {
            return {
              ...acc,
              [cur.id]: {
                ...cur,
              },
            };
          }, {}),
        },
      };
    })
    .addCase(fetchProducts.pending, state => {
      return {
        ...state,
        fetchProductsState: {
          fetchingProducts: true,
          fetchingProductsFail: false,
          fetchingProductsSuccess: false,
        },
        products: [],
      };
    })
    .addCase(fetchProducts.rejected, state => {
      return {
        ...state,
        fetchProductsState: {
          fetchingProducts: false,
          fetchingProductsFail: true,
          fetchingProductsSuccess: false,
        },
        products: [],
      };
    });
  // =====================================================================
});

export default productReducer;
