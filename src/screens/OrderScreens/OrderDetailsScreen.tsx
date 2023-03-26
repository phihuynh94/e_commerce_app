// Imports
import React from 'react';
import {SafeAreaView, ScrollView, StyleSheet, Text, View} from 'react-native';
import AntIcon from 'react-native-vector-icons/AntDesign';
import {Divider} from '../../common';
import CartCard from '../../components/Cart/CartCard/CartCard';
import {orders} from '../../mockData/orders.mock';
import {globalStyles} from '../../styles';
import {theme} from '../../styles/theme';
// =====================================================================

// Component
const OrderDetailsScreen = () => {
  // Render
  return (
    <SafeAreaView style={globalStyles.flex}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={globalStyles.container}>
          {/* Process bar */}
          <View style={styles.processBar}>
            <View style={styles.processStatus}>
              <AntIcon
                color={theme.colors.primaryBlue}
                name="checkcircle"
                size={40}
              />

              <View style={styles.statusText}>
                <Text style={styles.text}>Packing</Text>
              </View>
            </View>

            <View style={styles.processLine}>
              <View style={styles.line} />
            </View>

            <View style={styles.processStatus}>
              <AntIcon
                color={theme.colors.primaryBlue}
                name="checkcircle"
                size={40}
              />

              <View style={styles.statusText}>
                <Text style={styles.text}>Shipping</Text>
              </View>
            </View>

            <View style={styles.processLine}>
              <View style={styles.line} />
            </View>

            <View style={styles.processStatus}>
              <AntIcon
                color={theme.colors.primaryBlue}
                name="checkcircle"
                size={40}
              />

              <View style={styles.statusText}>
                <Text style={styles.text}>Arriving</Text>
              </View>
            </View>

            <View style={styles.processLine}>
              <View style={styles.line} />
            </View>

            <View style={styles.processStatus}>
              <AntIcon
                color={theme.colors.primaryBlue}
                name="checkcircle"
                size={40}
              />

              <View style={styles.statusText}>
                <Text style={styles.text}>Delivered</Text>
              </View>
            </View>
          </View>

          {/* List of products in order */}
          <View style={styles.header}>
            <Text style={theme.typography.h4}>Product</Text>
          </View>
          <CartCard inOrderDetails />
          <CartCard inOrderDetails />

          {/* Shipping details */}
          <View style={styles.header}>
            <Text style={theme.typography.h4}>Shipping Details</Text>
          </View>

          <View style={styles.container}>
            <View style={styles.row}>
              <Text style={theme.typography.caption}>Date Shipped</Text>
              <Text style={theme.typography.small}>{orders[0].date}</Text>
            </View>

            <View style={styles.row}>
              <Text style={theme.typography.caption}>Address</Text>
              <Text style={theme.typography.small}>
                123 W Street, Denver, CO 80010
              </Text>
            </View>
          </View>

          {/* Payment details */}
          <View style={styles.header}>
            <Text style={theme.typography.h4}>Payment Details</Text>
          </View>

          <View style={styles.container}>
            {/* Subtotal amount */}
            <View style={styles.row}>
              <Text style={theme.typography.caption}>Subtotal</Text>
              <Text style={theme.typography.small}>$600.00</Text>
            </View>

            {/* Shipping amount */}
            <View style={styles.row}>
              <Text style={theme.typography.caption}>Shipping</Text>
              <Text style={theme.typography.small}>$50.00</Text>
            </View>

            {/* Tax amount */}
            <View style={styles.row}>
              <Text style={theme.typography.caption}>Tax</Text>
              <Text style={theme.typography.small}>$100.00</Text>
            </View>

            {/* Divider */}
            <Divider />

            {/* Total amount */}
            <View style={styles.row}>
              <Text style={theme.typography.caption}>Total</Text>
              <Text style={styles.total}>$750.00</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
// =====================================================================

// Styles
const styles = StyleSheet.create({
  container: {
    borderColor: theme.colors.primaryGray,
    borderRadius: 5,
    borderWidth: 1,
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  header: {
    marginVertical: 16,
  },
  line: {
    backgroundColor: theme.colors.primaryBlue,
    flex: 1,
    height: 4,
  },
  processBar: {
    flexDirection: 'row',
  },
  processLine: {
    flex: 1,
    flexDirection: 'row',
    marginTop: 20,
  },
  processStatus: {
    alignItems: 'center',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 10,
  },
  statusText: {
    marginTop: 10,
  },
  text: {
    fontSize: 8,
  },
  total: {
    ...theme.typography.h5,
    color: theme.colors.primaryBlue,
  },
});
// =====================================================================

export default OrderDetailsScreen;
