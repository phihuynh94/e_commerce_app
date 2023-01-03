// Imports
import {
  BottomTabNavigationOptions,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import React from 'react';
import IonIcon from 'react-native-vector-icons/Ionicons';
import MCIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import {
  AccountScreen,
  CartScreen,
  ExploreScreen,
  HomeScreen,
  OrderScreen,
} from '../screens';
import {staticValues} from '../styles';
import {theme} from '../styles/theme';
import {ScreenNames} from './routesHelpers';
// =====================================================================

// Type
export type AppTabParamList = {
  Account: undefined;
  Cart: undefined;
  Explore: undefined;
  Home: undefined;
  Order: undefined;
};
// =====================================================================

const Tab = createBottomTabNavigator<AppTabParamList>();

// Tab bar options
const tabBarOptions: BottomTabNavigationOptions = {
  headerShown: false,
  tabBarActiveTintColor: theme.colors.primaryBlue,
};
// =====================================================================

// Screen Options
const accountScreenOptions = (): BottomTabNavigationOptions => {
  return {
    tabBarIcon: ({color}) => {
      return (
        <MCIcon
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
        <MCIcon
          color={color}
          name="cart-outline"
          size={staticValues.iconSize}
        />
      );
    },
    tabBarLabel: ScreenNames.Cart,
  };
};

const exploreScreenOptions = (): BottomTabNavigationOptions => {
  return {
    tabBarIcon: ({color}) => {
      return (
        <MCIcon color={color} name="magnify" size={staticValues.iconSize} />
      );
    },
    tabBarLabel: ScreenNames.Explore,
  };
};

const homeScreenOptions = (): BottomTabNavigationOptions => {
  return {
    tabBarIcon: ({color}) => {
      return (
        <MCIcon
          color={color}
          name="home-outline"
          size={staticValues.iconSize}
        />
      );
    },
    tabBarLabel: ScreenNames.Home,
  };
};

const orderScreenOptions = (): BottomTabNavigationOptions => {
  return {
    tabBarIcon: ({color}) => {
      return (
        <IonIcon
          color={color}
          name="receipt-outline"
          size={staticValues.iconSize}
        />
      );
    },
    tabBarLabel: ScreenNames.Order,
  };
};
// =====================================================================

// AppTab
const AppTab = () => {
  return (
    <Tab.Navigator screenOptions={tabBarOptions}>
      <Tab.Screen
        component={HomeScreen}
        name={ScreenNames.Home}
        options={homeScreenOptions}
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
        component={OrderScreen}
        name={ScreenNames.Order}
        options={orderScreenOptions}
      />
      <Tab.Screen
        component={AccountScreen}
        name={ScreenNames.Account}
        options={accountScreenOptions}
      />
    </Tab.Navigator>
  );
};
// =====================================================================

export default AppTab;
