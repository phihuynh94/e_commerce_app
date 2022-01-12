import {
  createStackNavigator,
  StackNavigationOptions,
} from '@react-navigation/stack';
import React from 'react';
import {LoginScreen, RegisterScreen} from '../screens';
import ProductDetailScreen from '../screens/HomeScreens/ProductDetailScreen';
import {AuthStackParamList, RouteNames} from './routesHelper';

const Stack = createStackNavigator<AuthStackParamList>();

const navOptions: StackNavigationOptions = {
  headerShown: false,
};

const AuthRoutes = () => {
  return (
    <Stack.Navigator screenOptions={navOptions}>
      <Stack.Screen
        component={ProductDetailScreen}
        name={RouteNames.ProductDetailScreen}
      />
      <Stack.Screen component={LoginScreen} name={RouteNames.Login} />
      <Stack.Screen component={RegisterScreen} name={RouteNames.Register} />
    </Stack.Navigator>
  );
};

export default AuthRoutes;
