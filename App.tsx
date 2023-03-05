// Imports
import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import 'react-native-gesture-handler';
import {Provider as PaperProvider} from 'react-native-paper';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {Provider} from 'react-redux';
import {store} from './src/redux/store';
import AppRoutes from './src/routes/AppRoutes';
import {navTheme} from './src/styles/theme';
// =====================================================================

// App
const App = () => {
  return (
    <Provider store={store}>
      <PaperProvider>
        <SafeAreaProvider>
          <NavigationContainer theme={navTheme}>
            <AppRoutes />
          </NavigationContainer>
        </SafeAreaProvider>
      </PaperProvider>
    </Provider>
  );
};
// =====================================================================

export default App;
