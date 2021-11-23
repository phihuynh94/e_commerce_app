import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import 'react-native-gesture-handler';
import {Provider as PaperProvider} from 'react-native-paper';
import AuthRoutes from './src/routes/AuthRoutes';
import {RouteNames} from './src/routes/routesHelper';

const Stack = createStackNavigator();

const navOptions = {
  headerShown: false,
};

const App = () => {
  return (
    <PaperProvider>
      <NavigationContainer>
        <Stack.Navigator screenOptions={navOptions}>
          <Stack.Screen name={RouteNames.AuthRoutes} component={AuthRoutes} />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
};

export default App;
