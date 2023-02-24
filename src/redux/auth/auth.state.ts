export interface IAuthState {
  login: ILoginState;
  register: IRegisterState;
  token?: string;
}

export interface ILoginState {
  loggingIn: boolean;
  loggingInFail: boolean;
  loggingInSuccess: boolean;
}

export interface IRegisterState {
  submittingRegister: boolean;
  submittingRegisterFail: boolean;
  submittingRegisterSuccess: boolean;
}
