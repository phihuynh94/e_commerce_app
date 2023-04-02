// Imports
import {createAsyncThunk} from '@reduxjs/toolkit';
import {orders} from '../../mockData/orders.mock';
import {IOrder} from '../../models/order.model';
// =====================================================================

// Fetch Orders
export const fetchOrders = createAsyncThunk<IOrder[], undefined>(
  '[Orders] Fetch Orders',
  async (_, {rejectWithValue}) => {
    try {
      const data = await orders;

      return data;
    } catch (err) {
      return rejectWithValue(err);
    }
  },
);
// =====================================================================
