// Imports
import {useNavigation} from '@react-navigation/native';
import React, {useCallback} from 'react';
import {SafeAreaView, ScrollView, StyleSheet, Text, View} from 'react-native';
import {Button, Divider} from '../../common';
import {orders} from '../../mockData/orders.mock';
import {ScreenNames} from '../../routes/routesHelpers';
import {globalStyles} from '../../styles';
import {theme} from '../../styles/theme';
// =====================================================================

// Component
const OrderScreen = () => {
  // hooks
  const navigation = useNavigation();

  // useCallbacks
  const onView = useCallback(() => {
    navigation.navigate(ScreenNames.OrderDetail);
  }, [navigation]);
  // =====================================================================

  // Render
  return (
    <SafeAreaView style={globalStyles.flex}>
      {/* Order header */}
      <View style={styles.header}>
        <Text style={theme.typography.h4}>Order</Text>
      </View>

      {/* Divider */}
      <Divider />

      {/* Container */}
      <ScrollView style={globalStyles.container}>
        {/* Order card */}
        <View style={styles.card}>
          {/* Order header */}
          <View style={styles.row}>
            <View>
              {/* Order title */}
              <View style={styles.row}>
                <Text style={theme.typography.h4}>{orders[0].id}</Text>
              </View>

              {/* Order date */}
              <Text>Order at Shop: {orders[0].date}</Text>
            </View>

            {/* View order button */}
            <View>
              <Button onPress={onView}>View</Button>
            </View>
          </View>

          {/* Divider */}
          <Divider />
          <View style={styles.row} />

          {/* Shipping status */}
          <View style={styles.row}>
            <Text>Status</Text>
            <Text>{orders[0].status.toUpperCase()}</Text>
          </View>

          {/* Number of items */}
          <View style={styles.row}>
            <Text>Nums of Items</Text>
            <Text>{orders[0].items} items</Text>
          </View>

          {/* Order total */}
          <View style={styles.row}>
            <Text>Total</Text>
            <Text style={styles.price}>${orders[0].total}</Text>
          </View>
        </View>

        {/* Order card */}
        <View style={styles.card}>
          {/* Order header */}
          <View style={styles.row}>
            <View>
              {/* Order title */}
              <View style={styles.row}>
                <Text style={theme.typography.h4}>{orders[0].id}</Text>
              </View>

              {/* Order date */}
              <Text>Order at Shop: {orders[0].date}</Text>
            </View>

            {/* View order button */}
            <View>
              <Button onPress={onView}>View</Button>
            </View>
          </View>

          {/* Divider */}
          <Divider />
          <View style={styles.row} />

          {/* Shipping status */}
          <View style={styles.row}>
            <Text>Status</Text>
            <Text>{orders[0].status.toUpperCase()}</Text>
          </View>

          {/* Number of items */}
          <View style={styles.row}>
            <Text>Nums of Items</Text>
            <Text>{orders[0].items} items</Text>
          </View>

          {/* Order total */}
          <View style={styles.row}>
            <Text>Total</Text>
            <Text style={styles.price}>${orders[0].total}</Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
// =====================================================================

// Styles
const styles = StyleSheet.create({
  card: {
    borderColor: theme.colors.primaryGray,
    borderRadius: 5,
    borderWidth: 1,
    marginBottom: 16,
    padding: 16,
  },
  header: {
    padding: 16,
  },
  price: {
    ...theme.typography.h5,
    color: theme.colors.primaryBlue,
  },
  row: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
});
// =====================================================================

export default OrderScreen;
