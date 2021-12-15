declare global {
  namespace ReactNavigation {
    interface RootParamList extends AuthStackParamList {}
  }
}

export type AuthStackParamList = {
  Login: undefined;
  Register: undefined;
  ProductDetailScreen: undefined;
};

export enum RouteNames {
  AppRoutes = 'AppRoutes',
  AuthRoutes = 'AuthRoutes',
  ProductDetailScreen = 'ProductDetailScreen',
  Home = 'Home',
  Login = 'Login',
  Register = 'Register',
}
