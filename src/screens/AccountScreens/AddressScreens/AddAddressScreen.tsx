// Imports
import React, {useCallback, useState} from 'react';
import {SafeAreaView, ScrollView, StyleSheet, View} from 'react-native';
import {Button, TextInput} from '../../../common';
import {globalStyles} from '../../../styles';
// =====================================================================

// Component
const AddAddressScreen = () => {
  // useStates
  const [address, setAddress] = useState('');
  const [address2, setAddress2] = useState('');
  const [city, setCity] = useState('');
  const [country, setCountry] = useState('');
  const [fullName, setFullName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [state, setState] = useState('');
  const [zipcode, setZipcode] = useState('');
  // =====================================================================

  // useCallbacks
  const onAdd = useCallback(() => {}, []);
  // =====================================================================

  // Render
  return (
    <SafeAreaView style={globalStyles.flex}>
      <ScrollView style={globalStyles.container}>
        {/* Country or region input */}
        <TextInput
          onChangeText={setCountry}
          placeholder="Country or region"
          value={country}
        />

        {/* Full name input */}
        <TextInput
          onChangeText={setFullName}
          placeholder="Full Name"
          value={fullName}
        />

        {/* Address input */}
        <TextInput
          onChangeText={setAddress}
          placeholder="Address"
          value={address}
        />

        {/* Address 2 input */}
        <TextInput
          onChangeText={setAddress2}
          placeholder="Address 2"
          value={address2}
        />

        {/* City input */}
        <TextInput onChangeText={setCity} placeholder="City" value={city} />

        {/* State input */}
        <TextInput onChangeText={setState} placeholder="State" value={state} />

        {/* Zipcode input */}
        <TextInput
          onChangeText={setZipcode}
          placeholder="Zipcode"
          value={zipcode}
        />

        {/* Phone number input */}
        <TextInput
          onChangeText={setPhoneNumber}
          placeholder="Phone Number"
          value={phoneNumber}
        />
      </ScrollView>

      {/* Add address button */}
      <View style={styles.button}>
        <Button onPress={onAdd}>Add Address</Button>
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

export default AddAddressScreen;
