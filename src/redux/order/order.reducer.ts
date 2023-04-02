import {createReducer} from '@reduxjs/toolkit';
import {fetchOrders} from './order.action';
import {initialOrderState} from './order.initial';

const orderReducer = createReducer(initialOrderState, builder => {
  builder
    // Fetch Orders
    .addCase(fetchOrders.fulfilled, (state, {payload}) => {
      return {
        ...state,
        fetchOrdersState: {
          fetchingOrders: false,
          fetchingOrdersFail: false,
          fetchingOrdersSuccess: true,
        },
        orders: {
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
    .addCase(fetchOrders.pending, state => {
      return {
        ...state,
        fetchOrdersState: {
          fetchingOrders: true,
          fetchingOrdersFail: false,
          fetchingOrdersSuccess: false,
        },
        orders: [],
      };
    })
    .addCase(fetchOrders.rejected, state => {
      return {
        ...state,
        fetchOrdersState: {
          fetchingOrders: false,
          fetchingOrdersFail: true,
          fetchingOrdersSuccess: false,
        },
        orders: [],
      };
    });
  // =====================================================================
});

export default orderReducer;
