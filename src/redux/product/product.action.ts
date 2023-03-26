// Imports
import {createAsyncThunk} from '@reduxjs/toolkit';
import {products} from '../../mockData/products.mock';
import {IProduct} from '../../models/product.model';
// =====================================================================

// Fetch Products
export const fetchProducts = createAsyncThunk<IProduct[], undefined>(
  '[Product] Fetch Products',
  async (_, {rejectWithValue}) => {
    try {
      const data = await products;

      return data;
    } catch (err) {
      return rejectWithValue(err);
    }
  },
);
// =====================================================================
