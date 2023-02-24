import { createReducer } from '@reduxjs/toolkit';
import { login, register } from './auth.action';
import { initialAuthState } from './auth.initial';

const authReducer = createReducer(initialAuthState, builder => {
  builder
    // Login
    .addCase(login.fulfilled, (state, { payload }) => {
      return {
        ...state,
        login: {
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
        login: {
          loggingIn: true,
          loggingInFail: false,
          loggingInSuccess: false,
        },
      };
    })
    .addCase(login.rejected, state => {
      return {
        ...state,
        login: {
          loggingIn: false,
          loggingInFail: true,
          loggingInSuccess: false,
        },
      };
    })
    // =====================================================================

    // Register
    .addCase(register.fulfilled, (state, { payload }) => {
      return {
        ...state,
        register: {
          submittingRegister: false,
          submittingRegisterFail: false,
          submittingRegisterSuccess: true,
        },
        token: payload.token,
      };
    })
    .addCase(register.pending, state => {
      return {
        ...state,
        register: {
          submittingRegister: true,
          submittingRegisterFail: false,
          submittingRegisterSuccess: false,
        },
      };
    })
    .addCase(register.rejected, state => {
      return {
        ...state,
        register: {
          submittingRegister: false,
          submittingRegisterFail: true,
          submittingRegisterSuccess: false,
        },
      };
    });
  // =====================================================================
});

export default authReducer;
