// Imports
import {NavigationContainer, RouteProp} from '@react-navigation/native';
import {
  createStackNavigator,
  StackNavigationOptions,
} from '@react-navigation/stack';
import React from 'react';
import {StyleSheet} from 'react-native';
import 'react-native-gesture-handler';
import {Provider as PaperProvider} from 'react-native-paper';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {IProduct} from './src/models/product-model';
import AppTab from './src/routes/AppTab';
import AuthRoutes from './src/routes/AuthRoutes';
import {RouteNames, ScreenNames} from './src/routes/routesHelpers';
import {
  FavoriteProductScreen,
  FlashSaleScreen,
  NotificationDetailScreen,
  NotificationScreen,
  ProductDetailScreen,
  ReviewProductScreen,
  WriteReviewScreen,
} from './src/screens';
import {staticValues} from './src/styles';
import {navTheme, theme} from './src/styles/theme';
// =====================================================================

export type AppStackParamList = {
  AppTab: undefined;
  AuthRoutes: undefined;
  FavoriteProducts: undefined;
  FlashSale: {
    title: string;
    url: string;
  };
  Notification: undefined;
  NotificationDetail: {
    title: 'Offer' | 'Feed' | 'Activity';
  };
  ProductDetail: {product: IProduct; title: string};
  ReviewProduct: undefined;
  WriteReview: undefined;
};
// =====================================================================

const Stack = createStackNavigator<AppStackParamList>();

// Screen Options
const authRoutesOptions = (): StackNavigationOptions => {
  return {
    headerShown: false,
  };
};

const appRoutesOptions = (): StackNavigationOptions => {
  return {
    headerShown: false,
  };
};

const favoriteProductsOptions = (): StackNavigationOptions => {
  return {
    headerBackTitle: 'Home',
    title: 'Favorite Products',
  };
};

const flashSaleScreenOptions = (
  route: RouteProp<AppStackParamList, keyof AppStackParamList>,
): StackNavigationOptions => {
  return {
    headerBackTitle: 'Home',
    headerRight: () => (
      <Icon
        color={theme.colors.primaryBlack}
        name="magnify"
        size={staticValues.iconSize}
        style={styles.icon}
      />
    ),
    title: route.params?.title,
  };
};

const notificationScreenOptions = (): StackNavigationOptions => {
  return {
    headerBackTitle: 'Home',
    title: 'Notification',
  };
};

const notificationDetailScreenOptions = (
  route: RouteProp<AppStackParamList, keyof AppStackParamList>,
): StackNavigationOptions => {
  return {
    title: route.params?.title,
  };
};

const productDetailScreenOptions = (
  route: RouteProp<AppStackParamList, keyof AppStackParamList>,
): StackNavigationOptions => {
  return {
    headerTitleStyle: {
      paddingLeft: 10,
    },
    title: route.params?.title,
  };
};

const reviewProductScreenOptions = (): StackNavigationOptions => {
  return {
    title: 'Reviews',
  };
};

const writeReviewScreenOptions = (): StackNavigationOptions => {
  return {
    title: 'Write Review',
  };
};
// =====================================================================

// App
const App = () => {
  return (
    <PaperProvider>
      <SafeAreaProvider>
        <NavigationContainer theme={navTheme}>
          <Stack.Navigator>
            <Stack.Screen
              component={AuthRoutes}
              name={RouteNames.AuthRoutes}
              options={authRoutesOptions}
            />
            <Stack.Screen
              component={AppTab}
              name={RouteNames.AppTab}
              options={appRoutesOptions}
            />
            <Stack.Screen
              component={FavoriteProductScreen}
              name={ScreenNames.FavoriteProducts}
              options={favoriteProductsOptions}
            />
            <Stack.Screen
              component={FlashSaleScreen}
              name={ScreenNames.FlashSale}
              options={({route}) => flashSaleScreenOptions(route)}
            />
            <Stack.Screen
              component={NotificationScreen}
              name={ScreenNames.Notification}
              options={notificationScreenOptions}
            />
            <Stack.Screen
              component={NotificationDetailScreen}
              name={ScreenNames.NotificationDetail}
              options={({route}) => notificationDetailScreenOptions(route)}
            />
            <Stack.Screen
              component={ProductDetailScreen}
              name={ScreenNames.ProductDetail}
              options={({route}) => productDetailScreenOptions(route)}
            />
            <Stack.Screen
              component={ReviewProductScreen}
              name={ScreenNames.ReviewProduct}
              options={reviewProductScreenOptions}
            />
            <Stack.Screen
              component={WriteReviewScreen}
              name={ScreenNames.WriteReview}
              options={writeReviewScreenOptions}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaProvider>
    </PaperProvider>
  );
};
// =====================================================================

// Styles
const styles = StyleSheet.create({
  icon: {
    marginRight: 10,
  },
});
// =====================================================================

export default App;
