import { createAsyncThunk } from '@reduxjs/toolkit';
import { ILoginRequest, IRegisterRequest } from './auth.request';
import { ILoginResponse, IRegisterResponse } from './auth.response';

// Login
export const login = createAsyncThunk<ILoginResponse, ILoginRequest>(
  '[Auth] Login',
  async ({ email, password }, { rejectWithValue }) => {
    try {
      console.log(email, password);

      const data = await { token: 'token' };

      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);
// =====================================================================

// Register
export const register = createAsyncThunk<IRegisterResponse, IRegisterRequest>(
  '[Auth] Register',
  async ({ email, name, password }, { rejectWithValue }) => {
    try {
      console.log(email, name, password);

      const data = await { token: 'token' };

      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);
// =====================================================================
