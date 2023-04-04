// Imports
import React, {useCallback} from 'react';
import {useForm} from 'react-hook-form';
import {SafeAreaView, StyleSheet, View} from 'react-native';
import {Button, TextInput} from '../../../components/common';
import {globalStyles} from '../../../styles';
// =====================================================================

// Interface
interface IEditProfileFormData {
  birthday: string;
  email: string;
  gender: string;
  name: string;
  phoneNum: string;
}
// =====================================================================

// Component
const EditProfileScreen = () => {
  // hooks
  const {control, handleSubmit} = useForm<IEditProfileFormData>();
  // =====================================================================

  // useCallbacks
  const onEdit = useCallback(
    ({birthday, email, gender, name, phoneNum}: IEditProfileFormData) => {
      console.log(birthday, email, gender, name, phoneNum);
    },
    [],
  );
  // =====================================================================

  // Render
  return (
    <SafeAreaView style={globalStyles.flex}>
      <View style={globalStyles.container}>
        {/* Full name input */}
        <TextInput
          control={control}
          icon="account-outline"
          label="Full Name"
          name="name"
        />

        {/* Email input */}
        <TextInput
          control={control}
          icon="email-outline"
          label="Email"
          name="email"
        />

        {/* Birthday input */}
        <TextInput
          control={control}
          icon="calendar-outline"
          label="Birthday"
          name="birthday"
        />

        {/* Gender input */}
        <TextInput
          control={control}
          icon="gender-male-female"
          label="Gender"
          name="gender"
        />

        {/* Phone number input */}
        <TextInput
          control={control}
          icon="phone-outline"
          label="Phone Number"
          name="phoneNum"
        />

        {/* Edit profile button */}
        <View style={styles.button}>
          <Button onPress={handleSubmit(onEdit)}>Save Changes</Button>
        </View>
      </View>
    </SafeAreaView>
  );
};
// =====================================================================

// Styles
const styles = StyleSheet.create({
  button: {
    marginTop: 16,
  },
});
// =====================================================================

export default EditProfileScreen;
