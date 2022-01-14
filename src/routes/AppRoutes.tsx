import {
  BottomTabNavigationOptions,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import React from 'react';
import HomeRoutes from './HomeRoutes';
import {AppTabParamList, RouteNames} from './routesHelper';

const Tab = createBottomTabNavigator<AppTabParamList>();

const navOptions: BottomTabNavigationOptions = {
  headerShown: false,
};

const AppRoutes = () => {
  return (
    <Tab.Navigator screenOptions={navOptions}>
      <Tab.Screen component={HomeRoutes} name={RouteNames.HomeRoutes} />
    </Tab.Navigator>
  );
};

export default AppRoutes;
