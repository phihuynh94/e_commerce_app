import {
  BottomTabNavigationOptions,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {
  AccountScreen,
  CartScreen,
  ExploreScreen,
  OfferScreen,
} from '../screens';
import {staticValues} from '../styles';
import {theme} from '../styles/theme';
import HomeRoutes from './HomeRoutes';
import {RouteNames, ScreenNames} from './routesHelpers';

export type AppTabParamList = {
  Account: undefined;
  Cart: undefined;
  Explore: undefined;
  HomeRoutes: undefined;
  Offer: undefined;
};

const Tab = createBottomTabNavigator<AppTabParamList>();

const tabBarOptions: BottomTabNavigationOptions = {
  headerShown: false,
  tabBarActiveTintColor: theme.colors.primary,
};

const accountScreenOptions = (): BottomTabNavigationOptions => {
  return {
    tabBarIcon: ({color}) => {
      return (
        <Icon
          color={color}
          name="account-outline"
          size={staticValues.iconSize}
        />
      );
    },
    tabBarLabel: ScreenNames.Account,
  };
};

const cartScreenOptions = (): BottomTabNavigationOptions => {
  return {
    tabBarIcon: ({color}) => {
      return (
        <Icon color={color} name="cart-outline" size={staticValues.iconSize} />
      );
    },
    tabBarLabel: ScreenNames.Cart,
  };
};

const exploreScreenOptions = (): BottomTabNavigationOptions => {
  return {
    tabBarIcon: ({color}) => {
      return <Icon color={color} name="magnify" size={staticValues.iconSize} />;
    },
    tabBarLabel: ScreenNames.Explore,
  };
};

const homeRoutesOptions = (): BottomTabNavigationOptions => {
  return {
    tabBarIcon: ({color}) => {
      return (
        <Icon color={color} name="home-outline" size={staticValues.iconSize} />
      );
    },
    tabBarLabel: ScreenNames.Home,
  };
};

const offerScreenOptions = (): BottomTabNavigationOptions => {
  return {
    tabBarIcon: ({color}) => {
      return (
        <Icon color={color} name="tag-outline" size={staticValues.iconSize} />
      );
    },
    tabBarLabel: ScreenNames.Offer,
  };
};

const AppRoutes = () => {
  return (
    <Tab.Navigator screenOptions={tabBarOptions}>
      <Tab.Screen
        component={HomeRoutes}
        name={RouteNames.HomeRoutes}
        options={homeRoutesOptions}
      />
      <Tab.Screen
        component={ExploreScreen}
        name={ScreenNames.Explore}
        options={exploreScreenOptions}
      />
      <Tab.Screen
        component={CartScreen}
        name={ScreenNames.Cart}
        options={cartScreenOptions}
      />
      <Tab.Screen
        component={OfferScreen}
        name={ScreenNames.Offer}
        options={offerScreenOptions}
      />
      <Tab.Screen
        component={AccountScreen}
        name={ScreenNames.Account}
        options={accountScreenOptions}
      />
    </Tab.Navigator>
  );
};

export default AppRoutes;
