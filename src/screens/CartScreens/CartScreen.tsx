// Imports
import {useNavigation} from '@react-navigation/native';
import React, {useCallback} from 'react';
import {useForm} from 'react-hook-form';
import {SafeAreaView, ScrollView, StyleSheet, Text, View} from 'react-native';
import CartCard from '../../components/Cart/CartCard/CartCard';
import {Button, Divider, TextInput} from '../../components/common';
import {ScreenNames} from '../../routes/routesHelpers';
import {globalStyles} from '../../styles';
import {theme} from '../../styles/theme';
// =====================================================================

// Component
const CartScreen = () => {
  // hooks
  const {control, handleSubmit} = useForm<{coupon: string}>();

  const navigation = useNavigation();
  // =====================================================================

  // useCallbacks
  const onCheckout = useCallback(() => {
    navigation.navigate(ScreenNames.ShipTo);
  }, [navigation]);

  const onCoupon = useCallback(() => {}, []);
  // =====================================================================

  // Render
  return (
    <SafeAreaView style={globalStyles.flex}>
      {/* Your cart header */}
      <View style={styles.header}>
        <Text style={theme.typography.h4}>Your Cart</Text>
      </View>

      {/* Divider */}
      <Divider />

      {/* Container */}
      <View style={globalStyles.container}>
        <ScrollView showsVerticalScrollIndicator={false}>
          {/* List of products in cart */}
          <CartCard />
          <CartCard />
          <CartCard />

          {/* Enter coupon code input */}
          <View style={styles.coupon}>
            <View style={styles.couponInput}>
              <TextInput
                control={control}
                label="Enter Coupon Code"
                name="coupon"
              />
            </View>

            <View style={styles.couponButton}>
              <Button onPress={handleSubmit(onCoupon)}>Apply</Button>
            </View>
          </View>

          {/* Price summary */}
          <View style={styles.summary}>
            {/* Number of items */}
            <View style={styles.row}>
              <Text>Items (3)</Text>
              <Text>$600.00</Text>
            </View>

            {/* Shipping */}
            <View style={styles.row}>
              <Text>Shipping</Text>
              <Text>$600.00</Text>
            </View>

            {/* Taxes */}
            <View style={styles.row}>
              <Text>Taxes</Text>
              <Text>$600.00</Text>
            </View>

            {/* Divider */}
            <Divider />

            {/* Total price */}
            <View style={styles.total}>
              <Text style={theme.typography.h5}>Total Price</Text>
              <Text style={styles.totalPrice}>$600.00</Text>
            </View>
          </View>

          {/* Checkout button */}
          <Button onPress={onCheckout}>Check Out</Button>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};
// =====================================================================

// Styles
const styles = StyleSheet.create({
  coupon: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  couponButton: {
    flex: 1,
    marginLeft: 15,
  },
  couponInput: {
    flex: 2,
  },
  header: {
    padding: 16,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  summary: {
    borderColor: theme.colors.secondaryGray,
    borderRadius: 5,
    borderWidth: 1,
    marginVertical: 16,
    padding: 16,
  },
  total: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  totalPrice: {
    ...theme.typography.h5,
    color: theme.colors.primaryBlue,
  },
});
// =====================================================================

export default CartScreen;
