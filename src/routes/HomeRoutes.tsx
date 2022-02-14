import {RouteProp} from '@react-navigation/native';
import {
  createStackNavigator,
  StackNavigationOptions,
} from '@react-navigation/stack';
import React from 'react';
import {StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {FlashSaleScreen, HomeScreen} from '../screens';
import FavoriteProductsScreen from '../screens/HomeScreens/FavoriteProductScreen';
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
    </Stack.Navigator>
  );
};

export default HomeRoutes;

const styles = StyleSheet.create({
  icon: {
    marginRight: 10,
  },
});
