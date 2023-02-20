import {AppStackParamList} from './AppRoutes';
import {AuthStackParamList} from './AuthRoutes';

declare global {
  namespace ReactNavigation {
    interface RootParamList extends AppStackParamList, AuthStackParamList {}
  }
}

export enum RouteNames {
  AppTab = 'AppTab',
  AuthRoutes = 'AuthRoutes',
}

export enum ScreenNames {
  Account = 'Account',
  AddCard = 'AddCard',
  AddAddress = 'AddAddress',
  Address = 'Address',
  Cart = 'Cart',
  ChangePassword = 'ChangePassword',
  EditProfile = 'EditProfile',
  Explore = 'Explore',
  FavoriteProducts = 'FavoriteProducts',
  FlashSale = 'FlashSale',
  Home = 'Home',
  Login = 'Login',
  Notification = 'Notification',
  NotificationDetail = 'NotificationDetail',
  Order = 'Order',
  OrderDetail = 'OrderDetail',
  Payment = 'Payment',
  ProductDetail = 'ProductDetail',
  Profile = 'Profile',
  Register = 'Register',
  ReviewProduct = 'ReviewProduct',
  ShipTo = 'ShipTo',
  Success = 'Success',
  WriteReview = 'WriteReview',
}
