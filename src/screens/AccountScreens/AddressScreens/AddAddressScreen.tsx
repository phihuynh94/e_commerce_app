// Imports
import {RouteProp, useRoute} from '@react-navigation/native';
import React, {useCallback, useState} from 'react';
import {SafeAreaView, ScrollView, StyleSheet, View} from 'react-native';
import {Button, TextInput} from '../../../common';
import {AppStackParamList} from '../../../routes/AppRoutes';
import {globalStyles} from '../../../styles';
// =====================================================================

type RoutePropType = RouteProp<AppStackParamList, 'AddAddress'>;

// Component
const AddAddressScreen = () => {
  // Hooks
  const route = useRoute<RoutePropType>();

  const {type} = route.params;

  console.log(type);
  // =====================================================================

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
          label="Country or region"
          onChangeText={setCountry}
          placeholder="Country or region"
          value={country}
        />

        {/* Full name input */}
        <TextInput
          label="Full Name"
          onChangeText={setFullName}
          placeholder="Full Name"
          value={fullName}
        />

        {/* Address input */}
        <TextInput
          label="Address"
          onChangeText={setAddress}
          placeholder="Address"
          value={address}
        />

        {/* Address 2 input */}
        <TextInput
          label="Address 2"
          onChangeText={setAddress2}
          placeholder="Address 2"
          value={address2}
        />

        {/* City input */}
        <TextInput
          label="City"
          onChangeText={setCity}
          placeholder="City"
          value={city}
        />

        {/* State input */}
        <TextInput
          label="State"
          onChangeText={setState}
          placeholder="State"
          value={state}
        />

        {/* Zipcode input */}
        <TextInput
          label="Zipcode"
          onChangeText={setZipcode}
          placeholder="Zipcode"
          value={zipcode}
        />

        {/* Phone number input */}
        <TextInput
          label="Phone Number"
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
