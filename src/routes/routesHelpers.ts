import {AppStackParamList} from '../../App';
import {AuthStackParamList} from './AuthRoutes';
import {HomeStackParamList} from './HomeRoutes';

declare global {
  namespace ReactNavigation {
    interface RootParamList
      extends AppStackParamList,
        AuthStackParamList,
        HomeStackParamList {}
  }
}

export enum RouteNames {
  AppRoutes = 'AppRoutes',
  AuthRoutes = 'AuthRoutes',
  HomeRoutes = 'HomeRoutes',
}

export enum ScreenNames {
  Account = 'Account',
  Cart = 'Cart',
  Explore = 'Explore',
  FavoriteProducts = 'FavoriteProducts',
  FlashSale = 'FlashSale',
  Home = 'Home',
  Login = 'Login',
  Notification = 'Notification',
  NotificationDetail = 'NotificationDetail',
  Offer = 'Offer',
  ProductDetail = 'ProductDetail',
  Register = 'Register',
  ReviewProduct = 'ReviewProduct',
}
