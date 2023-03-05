// Imports
import {NavigationProp, RouteProp} from '@react-navigation/native';
import {
  createStackNavigator,
  StackNavigationOptions,
} from '@react-navigation/stack';
import React from 'react';
import {StyleSheet} from 'react-native';
import 'react-native-gesture-handler';
import FeatherIcon from 'react-native-vector-icons/Feather';
import MCIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import {IProduct} from '../models/product-model';
import {
  AddAddressScreen,
  AddCardScreen,
  AddressScreen,
  ChangePasswordScreen,
  EditProfileScreen,
  FavoriteProductScreen,
  FlashSaleScreen,
  NotificationDetailScreen,
  NotificationScreen,
  OrderDetailsScreen,
  PaymentScreen,
  ProductDetailsScreen,
  ProfileScreen,
  ReviewProductScreen,
  ShipToScreen,
  SuccessScreen,
  WriteReviewScreen,
} from '../screens';
import {staticValues} from '../styles';
import {theme} from '../styles/theme';
import AppTab from './AppTab';
import AuthRoutes from './AuthRoutes';
import {RouteNames, ScreenNames} from './routesHelpers';
// =====================================================================

// Type
export type AppStackParamList = {
  AddAddress: {type: 'add' | 'edit'};
  AddCard: undefined;
  Address: undefined;
  AppTab: undefined;
  AuthRoutes: undefined;
  Cart: undefined;
  ChangePassword: undefined;
  EditProfile: undefined;
  FavoriteProducts: undefined;
  FlashSale: {
    title: string;
    url: string;
  };
  Home: undefined;
  Notification: undefined;
  NotificationDetail: {
    title: 'Offer' | 'Feed' | 'Activity';
  };
  Order: undefined;
  OrderDetail: undefined;
  Payment: undefined;
  ProductDetail: {product: IProduct; title: string};
  Profile: undefined;
  ReviewProduct: undefined;
  ShipTo: undefined;
  Success: undefined;
  WriteReview: undefined;
};
// =====================================================================

const Stack = createStackNavigator<AppStackParamList>();

// Screen Options
const addAddressScreenOptions = (): StackNavigationOptions => {
  return {
    title: 'Add Address',
  };
};

const addCardScreenOptions = (): StackNavigationOptions => {
  return {
    headerBackTitle: 'Account',
    title: 'Add Card',
  };
};

const addressScreenOptions = (): StackNavigationOptions => {
  return {
    headerBackTitle: 'Account',
  };
};

const authRoutesOptions = (): StackNavigationOptions => {
  return {
    headerShown: false,
  };
};

const appRoutesOptions = (): StackNavigationOptions => {
  return {
    headerShown: false,
  };
};

const changePasswordScreenOptions = (): StackNavigationOptions => {
  return {
    title: 'Change Password',
  };
};

const editProfileScreenOptions = (): StackNavigationOptions => {
  return {
    title: 'Edit Profile',
  };
};

const favoriteProductsOptions = (): StackNavigationOptions => {
  return {
    headerBackTitle: 'Home',
    title: 'Favorite Products',
  };
};

const flashSaleScreenOptions = (
  route: RouteProp<AppStackParamList, 'FlashSale'>,
): StackNavigationOptions => {
  return {
    headerBackTitle: 'Home',
    headerRight: () => (
      <MCIcon
        color={theme.colors.primaryBlack}
        name="magnify"
        size={staticValues.iconSize}
        style={styles.icon}
      />
    ),
    title: route.params?.title,
  };
};

const notificationScreenOptions = (): StackNavigationOptions => {
  return {
    headerBackTitle: 'Home',
    title: 'Notification',
  };
};

const notificationDetailScreenOptions = (
  route: RouteProp<AppStackParamList, 'NotificationDetail'>,
): StackNavigationOptions => {
  return {
    title: route.params?.title,
  };
};

const orderDetailScreenOptions = (): StackNavigationOptions => {
  return {
    headerBackTitle: 'Orders',
    title: 'Order Details',
  };
};

const paymentScreenOptions = (): StackNavigationOptions => {
  return {
    headerBackTitle: 'Address',
    title: 'Payment',
  };
};

const productDetailsScreenOptions = (
  route: RouteProp<AppStackParamList, 'ProductDetail'>,
): StackNavigationOptions => {
  return {
    title: route.params?.title,
  };
};

const profileScreenOptions = (): StackNavigationOptions => {
  return {
    headerBackTitle: 'Account',
  };
};

const reviewProductScreenOptions = (): StackNavigationOptions => {
  return {
    title: 'Reviews',
  };
};

const shipToScreenOptions = (
  navigation: NavigationProp<AppStackParamList, 'AddAddress'>,
): StackNavigationOptions => {
  return {
    headerBackTitle: 'Cart',
    headerRight: () => (
      <FeatherIcon
        color={theme.colors.primaryBlue}
        name="plus"
        onPress={() =>
          navigation.navigate(ScreenNames.AddAddress, {type: 'add'})
        }
        size={staticValues.iconSize}
        style={styles.icon}
      />
    ),
    title: 'Ship to Address',
  };
};

const successScreenOptions = (): StackNavigationOptions => {
  return {
    headerShown: false,
  };
};

const writeReviewScreenOptions = (): StackNavigationOptions => {
  return {
    title: 'Write Review',
  };
};
// =====================================================================

// App
const AppRoutes = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        component={AuthRoutes}
        name={RouteNames.AuthRoutes}
        options={authRoutesOptions}
      />
      <Stack.Screen
        component={AppTab}
        name={RouteNames.AppTab}
        options={appRoutesOptions}
      />
      <Stack.Screen
        component={AddAddressScreen}
        name={ScreenNames.AddAddress}
        options={addAddressScreenOptions}
      />
      <Stack.Screen
        component={AddCardScreen}
        name={ScreenNames.AddCard}
        options={addCardScreenOptions}
      />
      <Stack.Screen
        component={AddressScreen}
        name={ScreenNames.Address}
        options={addressScreenOptions}
      />
      <Stack.Screen
        component={ChangePasswordScreen}
        name={ScreenNames.ChangePassword}
        options={changePasswordScreenOptions}
      />
      <Stack.Screen
        component={EditProfileScreen}
        name={ScreenNames.EditProfile}
        options={editProfileScreenOptions}
      />
      <Stack.Screen
        component={FavoriteProductScreen}
        name={ScreenNames.FavoriteProducts}
        options={favoriteProductsOptions}
      />
      <Stack.Screen
        component={FlashSaleScreen}
        name={ScreenNames.FlashSale}
        options={({route}) => flashSaleScreenOptions(route)}
      />
      <Stack.Screen
        component={NotificationScreen}
        name={ScreenNames.Notification}
        options={notificationScreenOptions}
      />
      <Stack.Screen
        component={NotificationDetailScreen}
        name={ScreenNames.NotificationDetail}
        options={({route}) => notificationDetailScreenOptions(route)}
      />
      <Stack.Screen
        component={OrderDetailsScreen}
        name={ScreenNames.OrderDetail}
        options={orderDetailScreenOptions}
      />
      <Stack.Screen
        component={PaymentScreen}
        name={ScreenNames.Payment}
        options={paymentScreenOptions}
      />
      <Stack.Screen
        component={ProductDetailsScreen}
        name={ScreenNames.ProductDetail}
        options={({route}) => productDetailsScreenOptions(route)}
      />
      <Stack.Screen
        component={ProfileScreen}
        name={ScreenNames.Profile}
        options={profileScreenOptions}
      />
      <Stack.Screen
        component={ReviewProductScreen}
        name={ScreenNames.ReviewProduct}
        options={reviewProductScreenOptions}
      />
      <Stack.Screen
        component={SuccessScreen}
        name={ScreenNames.Success}
        options={successScreenOptions}
      />
      <Stack.Screen
        component={ShipToScreen}
        name={ScreenNames.ShipTo}
        options={({navigation}) => shipToScreenOptions(navigation)}
      />
      <Stack.Screen
        component={WriteReviewScreen}
        name={ScreenNames.WriteReview}
        options={writeReviewScreenOptions}
      />
    </Stack.Navigator>
  );
};
// =====================================================================

// Styles
const styles = StyleSheet.create({
  icon: {
    marginRight: 10,
  },
});
// =====================================================================

export default AppRoutes;
