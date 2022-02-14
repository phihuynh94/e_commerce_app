import {
  createStackNavigator,
  StackNavigationOptions,
} from '@react-navigation/stack';
import React from 'react';
import {LoginScreen, RegisterScreen} from '../screens';
import {ScreenNames} from './routesHelpers';

export type AuthStackParamList = {
  Login: undefined;
  Register: undefined;
};

const Stack = createStackNavigator<AuthStackParamList>();

const navOptions: StackNavigationOptions = {
  headerShown: false,
};

const AuthRoutes = () => {
  return (
    <Stack.Navigator screenOptions={navOptions}>
      <Stack.Screen component={LoginScreen} name={ScreenNames.Login} />
      <Stack.Screen component={RegisterScreen} name={ScreenNames.Register} />
    </Stack.Navigator>
  );
};

export default AuthRoutes;
