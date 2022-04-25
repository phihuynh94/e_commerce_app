import {RouteProp} from '@react-navigation/native';
import {
  createStackNavigator,
  StackNavigationOptions,
} from '@react-navigation/stack';
import React from 'react';
import {StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {IProduct} from '../models/product-model';
import {FlashSaleScreen, HomeScreen, NotificationScreen} from '../screens';
import FavoriteProductsScreen from '../screens/HomeScreens/FavoriteProductScreen';
import NotificationDetailScreen from '../screens/NotificationScreens/NotificationDetailScreen';
import ProductDetailScreen from '../screens/ProductDetailScreen/ProductDetailScreen';
import ReviewProductScreen from '../screens/ReviewScreens/ReviewProductScreen';
import {staticValues} from '../styles';
import {theme} from '../styles/theme';
import {ScreenNames} from './routesHelpers';

export type HomeStackParamList = {
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
  ProductDetail: {product: IProduct; title: string};
  ReviewProduct: undefined;
};

const Stack = createStackNavigator<HomeStackParamList>();

const favoriteProductsOptions = (): StackNavigationOptions => {
  return {
    title: 'Favorite Products',
  };
};

const flashSaleScreenOptions = (
  route: RouteProp<HomeStackParamList, keyof HomeStackParamList>,
): StackNavigationOptions => {
  return {
    title: route.params?.title,
    headerRight: () => (
      <Icon
        color={theme.colors.text}
        name="magnify"
        size={staticValues.iconSize}
        style={styles.icon}
      />
    ),
  };
};

const homeScreenOptions = (): StackNavigationOptions => {
  return {
    headerShown: false,
  };
};

const notificationScreenOptions = (): StackNavigationOptions => {
  return {
    title: 'Notification',
  };
};

const notificationDetailScreenOptions = (
  route: RouteProp<HomeStackParamList, keyof HomeStackParamList>,
): StackNavigationOptions => {
  return {
    title: route.params?.title,
  };
};

const productDetailScreenOptions = (
  route: RouteProp<HomeStackParamList, keyof HomeStackParamList>,
): StackNavigationOptions => {
  return {
    title: route.params?.title,
    headerTitleStyle: {
      paddingLeft: 10,
    },
  };
};

const reviewProductScreenOptions = (): StackNavigationOptions => {
  return {
    title: 'Reviews',
  };
};

const HomeRoutes = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        component={HomeScreen}
        name={ScreenNames.Home}
        options={homeScreenOptions}
      />
      <Stack.Screen
        component={FavoriteProductsScreen}
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
        component={ProductDetailScreen}
        name={ScreenNames.ProductDetail}
        options={({route}) => productDetailScreenOptions(route)}
      />
      <Stack.Screen
        component={ReviewProductScreen}
        name={ScreenNames.ReviewProduct}
        options={reviewProductScreenOptions}
      />
    </Stack.Navigator>
  );
};

export default HomeRoutes;

const styles = StyleSheet.create({
  icon: {
    marginRight: 10,
  },
});
