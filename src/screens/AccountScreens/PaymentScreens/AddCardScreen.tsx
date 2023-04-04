// Import
import React, {useCallback} from 'react';
import {useForm} from 'react-hook-form';
import {SafeAreaView, StyleSheet, View} from 'react-native';
import {Button, TextInput} from '../../../components/common';
import {globalStyles} from '../../../styles';
// =====================================================================

// Interface
interface IAddCardFormData {
  cardHolder: string;
  cardNumber: string;
  expireDate: string;
  securityCode: string;
}
// =====================================================================

// Component
const AddCardScreen = () => {
  // hooks
  const {
    control,
    formState: {errors},
    handleSubmit,
  } = useForm<IAddCardFormData>();
  // =====================================================================

  // useCallbacks
  const onAdd = useCallback(
    ({cardHolder, cardNumber, expireDate, securityCode}: IAddCardFormData) => {
      console.log(cardHolder, cardNumber, expireDate, securityCode);
    },
    [],
  );
  // =====================================================================

  // Render
  return (
    <SafeAreaView style={globalStyles.flex}>
      {/* Container */}
      <View style={globalStyles.container}>
        {/* Card number input */}
        <TextInput
          control={control}
          errorMessage={errors.cardNumber?.message}
          label="Enter Card Number"
          name="cardNum"
          rules={{required: 'Required'}}
        />

        {/* Expiration date input */}
        <TextInput
          control={control}
          errorMessage={errors.expireDate?.message}
          label="Expiration Date"
          name="expireDate"
          rules={{required: 'Required'}}
        />

        {/* Security code input */}
        <TextInput
          control={control}
          errorMessage={errors.securityCode?.message}
          label="Security Code"
          name="securityCode"
          rules={{required: 'Required'}}
        />

        {/* Card holder input */}
        <TextInput
          control={control}
          errorMessage={errors.cardHolder?.message}
          label="Card Holder"
          name="cardHolder"
          rules={{required: 'Required'}}
        />
      </View>

      {/* Add address button */}
      <View style={styles.button}>
        <Button onPress={handleSubmit(onAdd)}>Add Card</Button>
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
