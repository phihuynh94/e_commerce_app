import {
  createStackNavigator,
  StackNavigationOptions,
} from '@react-navigation/stack';
import React from 'react';
import {HomeScreen} from '../screens';
import {ScreenNames} from './routesHelper';

const Stack = createStackNavigator();

const screenOptions: StackNavigationOptions = {
  headerShown: false,
};

const HomeRoutes = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        component={HomeScreen}
        name={ScreenNames.Home}
        options={screenOptions}
      />
    </Stack.Navigator>
  );
};

export default HomeRoutes;
