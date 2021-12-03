import {
  createStackNavigator,
  StackNavigationOptions,
} from '@react-navigation/stack';
import React from 'react';
import {LoginScreen, RegisterScreen} from '../screens';
import {AuthStackParamList, RouteNames} from './routesHelper';

const AuthNav = createStackNavigator<AuthStackParamList>();

const navOptions: StackNavigationOptions = {
  headerShown: false,
};

const AuthRoutes = () => {
  return (
    <AuthNav.Navigator screenOptions={navOptions}>
      <AuthNav.Screen component={LoginScreen} name={RouteNames.Login} />
      <AuthNav.Screen component={RegisterScreen} name={RouteNames.Register} />
    </AuthNav.Navigator>
  );
};

export default AuthRoutes;
