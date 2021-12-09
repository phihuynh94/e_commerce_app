import {
  DefaultTheme as NavDefaultTheme,
  NavigationContainer,
  Theme,
} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import 'react-native-gesture-handler';
import {
  DefaultTheme as PaperDefaultTheme,
  Provider as PaperProvider,
} from 'react-native-paper';
import AuthRoutes from './src/routes/AuthRoutes';
import {RouteNames} from './src/routes/routesHelper';

const Stack = createStackNavigator();

const navTheme: Theme = {
  ...NavDefaultTheme,
  colors: {
    ...NavDefaultTheme.colors,
    background: '#FFFFFF',
  },
};

export const appTheme = {
  ...PaperDefaultTheme,
  roundness: 5,
  colors: {
    ...PaperDefaultTheme.colors,
    primary: '#40BFFF',
    accent: '#EBF0FF',
    white: '#FFFF',
    text: '#9098B1',
  },
};

const navOptions = {
  headerShown: false,
};

const App = () => {
  return (
    <PaperProvider theme={appTheme}>
      <NavigationContainer theme={navTheme}>
        <Stack.Navigator screenOptions={navOptions}>
          <Stack.Screen name={RouteNames.AuthRoutes} component={AuthRoutes} />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
};

export default App;
