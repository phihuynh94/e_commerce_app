// Imports
import {createAsyncThunk} from '@reduxjs/toolkit';
import {banners} from '../../mockData/banners.mock';
import {IBanner} from '../../models/banner.model';
// =====================================================================

// Fetch Banners
export const fetchBanners = createAsyncThunk<IBanner[], undefined>(
  '[Banner] Fetch Banners',
  async (_, {rejectWithValue}) => {
    try {
      const data = await banners;

      return data;
    } catch (err) {
      return rejectWithValue(err);
    }
  },
);
// =====================================================================
