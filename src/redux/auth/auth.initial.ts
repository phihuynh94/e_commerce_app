import {IAuthState} from './auth.state';

export const initialAuthState: IAuthState = {
  loginState: {
    loggingIn: false,
    loggingInFail: false,
    loggingInSuccess: false,
  },
  registerState: {
    registering: false,
    registerFail: false,
    registerSuccess: false,
  },
  token: undefined,
};
