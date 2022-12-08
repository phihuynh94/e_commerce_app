// Imports
import {useNavigation} from '@react-navigation/native';
import React, {useCallback} from 'react';
import {Pressable, SafeAreaView, StyleSheet, Text} from 'react-native';
import AntIcon from 'react-native-vector-icons/AntDesign';
import FAIcon from 'react-native-vector-icons/FontAwesome';
import {ScreenNames} from '../../routes/routesHelpers';
import {globalStyles, staticValues} from '../../styles';
import {theme} from '../../styles/theme';
// =====================================================================

// Component
const PaymentScreen = () => {
  // Hooks
  const navigation = useNavigation();
  // =====================================================================

  // useCallbacks
  const onBank = useCallback(() => {
    navigation.navigate(ScreenNames.Success);
  }, [navigation]);

  const onCreditCard = useCallback(() => {
    navigation.navigate(ScreenNames.Success);
  }, [navigation]);

  const onPaypal = useCallback(() => {
    navigation.navigate(ScreenNames.Success);
  }, [navigation]);
  // =====================================================================

  // Render
  return (
    <SafeAreaView style={globalStyles.flex}>
      {/* Credit card */}
      <Pressable onPress={onCreditCard} style={styles.row}>
        <AntIcon
          color={theme.colors.primaryBlue}
          name="creditcard"
          size={staticValues.iconSize}
          style={styles.icon}
        />
        <Text style={theme.typography.h5}>Credit Card or Debit</Text>
      </Pressable>

      {/* Paypal */}
      <Pressable onPress={onPaypal} style={styles.row}>
        <FAIcon
          color={theme.colors.primaryBlue}
          name="paypal"
          size={staticValues.iconSize}
          style={styles.icon}
        />
        <Text style={theme.typography.h5}>Paypal</Text>
      </Pressable>

      {/* Bank transfer */}
      <Pressable onPress={onBank} style={styles.row}>
        <FAIcon
          color={theme.colors.primaryBlue}
          name="bank"
          size={staticValues.iconSize}
          style={styles.icon}
        />
        <Text style={theme.typography.h5}>Bank Transfer</Text>
      </Pressable>
    </SafeAreaView>
  );
};
// =====================================================================

// Styles
const styles = StyleSheet.create({
  icon: {
    marginRight: 10,
  },
  row: {
    alignItems: 'center',
    borderBottomColor: theme.colors.primaryGray,
    borderBottomWidth: 1,
    flexDirection: 'row',
    padding: 24,
  },
});
// =====================================================================

export default PaymentScreen;
