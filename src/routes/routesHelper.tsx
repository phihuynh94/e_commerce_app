/* eslint-disable no-shadow */
declare global {
  namespace ReactNavigation {
    interface RootParamList extends AuthStackParamList, AppStackParamList {}
  }
}

export type AppStackParamList = {
  AppRoutes: undefined;
  AuthRoutes: undefined;
};

export type AppTabParamList = {
  HomeRoutes: undefined;
};

export type AuthStackParamList = {
  Login: undefined;
  Register: undefined;
};

export enum RouteNames {
  AppRoutes = 'AppRoutes',
  AuthRoutes = 'AuthRoutes',
  HomeRoutes = 'HomeRoutes',
}

export enum ScreenNames {
  Home = 'Home',
  Login = 'Login',
  Register = 'Register',
}
