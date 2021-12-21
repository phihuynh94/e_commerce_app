import {
  DefaultTheme as NavDefaultTheme,
  NavigationContainer,
  Theme as NavTheme,
} from '@react-navigation/native';
import {
  createStackNavigator,
  StackNavigationOptions,
} from '@react-navigation/stack';
import React from 'react';
import 'react-native-gesture-handler';
import {
  DefaultTheme as PaperDefaultTheme,
  Provider as PaperProvider,
} from 'react-native-paper';
import {Theme as PaperTheme} from 'react-native-paper/lib/typescript/types';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import AuthRoutes from './src/routes/AuthRoutes';
import {RouteNames} from './src/routes/routesHelper';

const Stack = createStackNavigator();

const navTheme: NavTheme = {
  ...NavDefaultTheme,
  colors: {
    ...NavDefaultTheme.colors,
    background: '#FFFFFF',
  },
};

const paperTheme: PaperTheme = {
  ...PaperDefaultTheme,
  roundness: 5,
  colors: {
    ...PaperDefaultTheme.colors,
    primary: '#40BFFF',
    accent: '#EBF0FF',
    text: '#9098B1',
  },
};

export const theme = {
  ...navTheme,
  ...paperTheme,
  colors: {
    ...navTheme.colors,
    ...paperTheme.colors,
    white: '#FFFFFF',
  },
};

const navOptions: StackNavigationOptions = {
  headerShown: false,
};

const App = () => {
  return (
    <PaperProvider theme={paperTheme}>
      <NavigationContainer theme={navTheme}>
        <SafeAreaProvider>
          <Stack.Navigator screenOptions={navOptions}>
            <Stack.Screen name={RouteNames.AuthRoutes} component={AuthRoutes} />
          </Stack.Navigator>
        </SafeAreaProvider>
      </NavigationContainer>
    </PaperProvider>
  );
};

export default App;
