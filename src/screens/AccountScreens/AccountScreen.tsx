// Import
import {useNavigation} from '@react-navigation/native';
import React, {useCallback} from 'react';
import {Pressable, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import AntIcon from 'react-native-vector-icons/AntDesign';
import IonIcon from 'react-native-vector-icons/Ionicons';
import MCIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import {Divider} from '../../common';
import {ScreenNames} from '../../routes/routesHelpers';
import {globalStyles, staticValues} from '../../styles';
import {theme} from '../../styles/theme';
// =====================================================================

// Interfaces & Types

// =====================================================================

// Component
const AccountScreen = () => {
  // Hooks
  const navigation = useNavigation();
  // =====================================================================

  // useSelectors

  // =====================================================================

  // useStates

  // =====================================================================

  // useRefs

  // =====================================================================

  // useMemos

  // =====================================================================

  // useCallbacks
  const onAddress = useCallback(() => {}, []);

  const onOrders = useCallback(() => {
    navigation.navigate(ScreenNames.Order);
  }, [navigation]);

  const onPayment = useCallback(() => {}, []);

  const onProfile = useCallback(() => {
    navigation.navigate(ScreenNames.Profile);
  }, [navigation]);
  // =====================================================================

  // useEffects

  // =====================================================================

  // Render
  return (
    <SafeAreaView style={globalStyles.flex}>
      {/* Order header */}
      <View style={styles.header}>
        <Text style={theme.typography.h4}>Account</Text>
      </View>

      {/* Divider */}
      <Divider />

      {/* Container */}
      <View style={globalStyles.container}>
        {/* Profile pressable */}
        <Pressable onPress={onProfile} style={styles.pressable}>
          <MCIcon
            color={theme.colors.primaryBlue}
            name="account-outline"
            size={staticValues.iconSize}
          />

          <Text style={styles.title}>Profile</Text>
        </Pressable>

        {/* Order pressable */}
        <Pressable onPress={onOrders} style={styles.pressable}>
          <IonIcon
            color={theme.colors.primaryBlue}
            name="receipt-outline"
            size={staticValues.iconSize}
          />

          <Text style={styles.title}>Order</Text>
        </Pressable>

        {/* Address pressable */}
        <Pressable onPress={onAddress} style={styles.pressable}>
          <IonIcon
            color={theme.colors.primaryBlue}
            name="location-outline"
            size={staticValues.iconSize}
          />

          <Text style={styles.title}>Address</Text>
        </Pressable>

        {/* Payment pressable */}
        <Pressable onPress={onPayment} style={styles.pressable}>
          <AntIcon
            color={theme.colors.primaryBlue}
            name="creditcard"
            size={staticValues.iconSize}
          />

          <Text style={styles.title}>Payment</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};
// =====================================================================

// Styles
const styles = StyleSheet.create({
  header: {
    padding: 16,
  },
  pressable: {
    alignItems: 'center',
    borderBottomWidth: 0.2,
    flexDirection: 'row',
    paddingVertical: 20,
  },
  title: {
    ...theme.typography.h5,
    marginLeft: 20,
  },
});
// =====================================================================

export default AccountScreen;
