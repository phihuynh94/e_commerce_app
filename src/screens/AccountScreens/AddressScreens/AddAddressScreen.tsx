// Imports
import {RouteProp, useRoute} from '@react-navigation/native';
import React, {useCallback} from 'react';
import {useForm} from 'react-hook-form';
import {SafeAreaView, ScrollView, StyleSheet, View} from 'react-native';
import {Button, TextInput} from '../../../components/common';
import {AppStackParamList} from '../../../routes/AppRoutes';
import {globalStyles} from '../../../styles';
// =====================================================================

type RoutePropType = RouteProp<AppStackParamList, 'AddAddress'>;

// Interface
interface IAddAddressFormData {
  address: string;
  address2: string;
  city: string;
  country: string;
  name: string;
  phoneNum: string;
  state: string;
  zipcode: string;
}
// =====================================================================

// Component
const AddAddressScreen = () => {
  // Hooks
  const {
    control,
    formState: {errors},
    handleSubmit,
  } = useForm<IAddAddressFormData>();

  const route = useRoute<RoutePropType>();

  const {type} = route.params;

  console.log(type);
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
          control={control}
          errorMessage={errors.country?.message}
          label="Country or region"
          name="country"
          rules={{required: 'Required'}}
        />

        {/* Full name input */}
        <TextInput
          control={control}
          errorMessage={errors.name?.message}
          label="Full Name"
          name="name"
          rules={{required: 'Required'}}
        />

        {/* Address input */}
        <TextInput
          control={control}
          errorMessage={errors.address?.message}
          label="Address"
          name="address"
          rules={{required: 'Required'}}
        />

        {/* Address 2 input */}
        <TextInput
          control={control}
          errorMessage={errors.address2?.message}
          label="Address 2"
          name="address2"
          rules={{required: 'Required'}}
        />

        {/* City input */}
        <TextInput
          control={control}
          errorMessage={errors.city?.message}
          label="City"
          name="city"
          rules={{required: 'Required'}}
        />

        {/* State input */}
        <TextInput
          control={control}
          errorMessage={errors.state?.message}
          label="State"
          name="state"
          rules={{required: 'Required'}}
        />

        {/* Zipcode input */}
        <TextInput
          control={control}
          errorMessage={errors.zipcode?.message}
          label="Zipcode"
          name="zipcode"
          rules={{required: 'Required'}}
        />

        {/* Phone number input */}
        <TextInput
          control={control}
          errorMessage={errors.phoneNum?.message}
          label="Phone Number"
          name="phoneNum"
          rules={{required: 'Required'}}
        />
      </ScrollView>

      {/* Add address button */}
      <View style={styles.button}>
        <Button onPress={handleSubmit(onAdd)}>Add Address</Button>
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
