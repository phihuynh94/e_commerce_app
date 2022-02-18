import {NavigationContainer} from '@react-navigation/native';
import {
  createStackNavigator,
  StackNavigationOptions,
} from '@react-navigation/stack';
import React from 'react';
import 'react-native-gesture-handler';
import {Provider as PaperProvider} from 'react-native-paper';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import AppRoutes from './src/routes/AppRoutes';
import AuthRoutes from './src/routes/AuthRoutes';
import {RouteNames} from './src/routes/routesHelpers';
import {navTheme, paperTheme} from './src/styles/theme';

export type AppStackParamList = {
  AppRoutes: undefined;
  AuthRoutes: undefined;
};

const Stack = createStackNavigator<AppStackParamList>();

const navOptions: StackNavigationOptions = {
  headerShown: false,
};

const App = () => {
  return (
    <PaperProvider theme={paperTheme}>
      <SafeAreaProvider>
        <NavigationContainer theme={navTheme}>
          <Stack.Navigator screenOptions={navOptions}>
            <Stack.Screen component={AuthRoutes} name={RouteNames.AuthRoutes} />
            <Stack.Screen component={AppRoutes} name={RouteNames.AppRoutes} />
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaProvider>
    </PaperProvider>
  );
};

export default App;
