import { IAuthState } from './auth.state';

export const initialAuthState: IAuthState = {
  login: {
    loggingIn: false,
    loggingInFail: false,
    loggingInSuccess: false,
  },
  register: {
    submittingRegister: false,
    submittingRegisterFail: false,
    submittingRegisterSuccess: false,
  },
  token: undefined,
};
