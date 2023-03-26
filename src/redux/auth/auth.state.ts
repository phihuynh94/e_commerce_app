export interface IAuthState {
  loginState: ILoginState;
  registerState: IRegisterState;
  token?: string;
}

export interface ILoginState {
  loggingIn: boolean;
  loggingInFail: boolean;
  loggingInSuccess: boolean;
}

export interface IRegisterState {
  registering: boolean;
  registerFail: boolean;
  registerSuccess: boolean;
}
