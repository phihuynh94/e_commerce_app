import {AppStackParamList} from '../../App';
import {AuthStackParamList} from './AuthRoutes';

declare global {
  namespace ReactNavigation {
    interface RootParamList extends AppStackParamList, AuthStackParamList {}
  }
}

export enum RouteNames {
  AppTab = 'AppTab',
  AppRoutes = 'AppRoutes',
  AuthRoutes = 'AuthRoutes',
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
