# React Navigation

Source: https://reactnavigation.org/docs/getting-started

## Install react-navigation

`yarn add @react-navigation/native`

## Install react-navigation packages

`yarn add react-native-reanimated react-native-gesture-handler react-native-screens react-native-safe-area-context @react-native-community/masked-view`

## Install stack navigator

`yarn add @react-navigation/stack`

## In App.tsx

```
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import 'react-native-gesture-handler';

    const Stack = createStackNavigator();

    const App = () => {
        return (
            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen name="Screen Name" component={ComponentName} />
                </Stack.Navigator>
            </NavigationContainer>
        );
    };

export default App;

```
