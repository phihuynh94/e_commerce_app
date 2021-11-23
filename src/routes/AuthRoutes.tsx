import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {LoginScreen, RegisterScreen} from '../screens';
import {RouteNames} from './routesHelper';

const AuthNav = createStackNavigator();

const navOptions = {
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
