// Import
import React, {useCallback, useState} from 'react';
import {SafeAreaView, StyleSheet, View} from 'react-native';
import {Button, TextInput} from '../../../common';
import {globalStyles} from '../../../styles';
// =====================================================================

// Component
const AddCardScreen = () => {
  // useStates
  const [cardNumber, setCardNumber] = useState('');
  const [expireDate, setExpireDate] = useState('');
  const [securityCode, setSecurityCode] = useState('');
  const [cardHolder, setCardHolder] = useState('');
  // =====================================================================

  // useCallbacks
  const onAdd = useCallback(() => {}, []);
  // =====================================================================

  // Render
  return (
    <SafeAreaView style={globalStyles.flex}>
      {/* Container */}
      <View style={globalStyles.container}>
        {/* Card number input */}
        <TextInput
          onChangeText={setCardNumber}
          placeholder="Enter Card Number"
          value={cardNumber}
        />

        {/* Expiration date input */}
        <TextInput
          onChangeText={setExpireDate}
          placeholder="Expiration Date"
          value={expireDate}
        />

        {/* Security code input */}
        <TextInput
          onChangeText={setSecurityCode}
          placeholder="Security Code"
          value={securityCode}
        />

        {/* Card holder input */}
        <TextInput
          onChangeText={setCardHolder}
          placeholder="Card Holder"
          value={cardHolder}
        />
      </View>

      {/* Add address button */}
      <View style={styles.button}>
        <Button onPress={onAdd}>Add Card</Button>
      </View>
    </SafeAreaView>
  );
};
// =====================================================================

// Styles
const styles = StyleSheet.create({
  button: {
    paddingHorizontal: 16,
  },
});
// =====================================================================

export default AddCardScreen;
