import {createReducer} from '@reduxjs/toolkit';
import {login, register} from './auth.action';
import {initialAuthState} from './auth.initial';

const authReducer = createReducer(initialAuthState, builder => {
  builder
    // Login
    .addCase(login.fulfilled, (state, {payload}) => {
      return {
        ...state,
        loginState: {
          loggingIn: false,
          loggingInFail: false,
          loggingInSuccess: true,
        },
        token: payload.token,
      };
    })
    .addCase(login.pending, state => {
      return {
        ...state,
        loginState: {
          loggingIn: true,
          loggingInFail: false,
          loggingInSuccess: false,
        },
      };
    })
    .addCase(login.rejected, state => {
      return {
        ...state,
        loginState: {
          loggingIn: false,
          loggingInFail: true,
          loggingInSuccess: false,
        },
      };
    })
    // =====================================================================

    // Register
    .addCase(register.fulfilled, (state, {payload}) => {
      return {
        ...state,
        registerState: {
          registering: false,
          registerFail: false,
          registerSuccess: true,
        },
        token: payload.token,
      };
    })
    .addCase(register.pending, state => {
      return {
        ...state,
        registerState: {
          registering: true,
          registerFail: false,
          registerSuccess: false,
        },
      };
    })
    .addCase(register.rejected, state => {
      return {
        ...state,
        registerState: {
          registering: false,
          registerFail: true,
          registerSuccess: false,
        },
      };
    });
  // =====================================================================
});

export default authReducer;
