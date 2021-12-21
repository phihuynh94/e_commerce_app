/* eslint-disable no-shadow */
declare global {
  namespace ReactNavigation {
    interface RootParamList extends AuthStackParamList {}
  }
}

export type AuthStackParamList = {
  Login: undefined;
  Register: undefined;
};

export enum RouteNames {
  AppRoutes = 'AppRoutes',
  AuthRoutes = 'AuthRoutes',
  Home = 'Home',
  Login = 'Login',
  Register = 'Register',
}
