import { combineReducers } from '@reduxjs/toolkit';
import authReducer from './auth/auth.reducer';

const reducer = combineReducers({
  auth: authReducer,
});

export type RootState = ReturnType<typeof reducer>;

export default reducer;
