// Imports
import {RouteProp} from '@react-navigation/native';
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
  FavoriteProductScreen,
  FlashSaleScreen,
  NotificationDetailScreen,
  NotificationScreen,
  PaymentScreen,
  ProductDetailScreen,
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
  AppTab: undefined;
  AuthRoutes: undefined;
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
  Payment: undefined;
  ProductDetail: {product: IProduct; title: string};
  ReviewProduct: undefined;
  ShipTo: undefined;
  Success: undefined;
  WriteReview: undefined;
};
// =====================================================================

const Stack = createStackNavigator<AppStackParamList>();

// Screen Options
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

const favoriteProductsOptions = (): StackNavigationOptions => {
  return {
    headerBackTitle: 'Home',
    title: 'Favorite Products',
  };
};

const flashSaleScreenOptions = (
  route: RouteProp<AppStackParamList, keyof AppStackParamList>,
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
  route: RouteProp<AppStackParamList, keyof AppStackParamList>,
): StackNavigationOptions => {
  return {
    title: route.params?.title,
  };
};

const paymentScreenOptions = (): StackNavigationOptions => {
  return {
    title: '',
    headerBackTitle: 'Payment',
    headerBackTitleStyle: {
      ...theme.typography.h4,
      color: theme.colors.primaryBlack,
      marginLeft: 10,
    },
    headerLeftContainerStyle: {
      paddingLeft: 10,
    },
    headerTintColor: theme.colors.primaryBlack,
  };
};

const productDetailScreenOptions = (
  route: RouteProp<AppStackParamList, keyof AppStackParamList>,
): StackNavigationOptions => {
  return {
    headerTitleStyle: {
      paddingLeft: 10,
    },
    title: route.params?.title,
  };
};

const reviewProductScreenOptions = (): StackNavigationOptions => {
  return {
    title: 'Reviews',
  };
};

const shipToScreenOptions = (): StackNavigationOptions => {
  return {
    title: '',
    headerBackTitle: 'Ship To',
    headerBackTitleStyle: {
      ...theme.typography.h4,
      color: theme.colors.primaryBlack,
      marginLeft: 10,
    },
    headerLeftContainerStyle: {
      paddingLeft: 10,
    },
    headerRight: () => (
      <FeatherIcon
        color={theme.colors.primaryBlue}
        name="plus"
        size={staticValues.iconSize}
        style={styles.icon}
      />
    ),
    headerRightContainerStyle: {
      paddingRight: 10,
    },
    headerTintColor: theme.colors.primaryBlack,
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
        component={PaymentScreen}
        name={ScreenNames.Payment}
        options={paymentScreenOptions}
      />
      <Stack.Screen
        component={ProductDetailScreen}
        name={ScreenNames.ProductDetail}
        options={({route}) => productDetailScreenOptions(route)}
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
        options={shipToScreenOptions}
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
