// Imports
import React, {useCallback} from 'react';
import {useForm} from 'react-hook-form';
import {SafeAreaView, StyleSheet, View} from 'react-native';
import {Button, TextInput} from '../../../components/common';
import {globalStyles} from '../../../styles';
// =====================================================================

// Interface
interface IChangePasswordFormData {
  confirmPassword: string;
  oldPassword: string;
  password: string;
}
// =====================================================================

// Component
const EditProfileScreen = () => {
  // hooks
  const {
    control,
    formState: {errors},
    handleSubmit,
  } = useForm<IChangePasswordFormData>();
  // =====================================================================

  // useCallbacks
  const onEdit = useCallback(
    ({confirmPassword, oldPassword, password}: IChangePasswordFormData) => {
      console.log(confirmPassword, oldPassword, password);
    },
    [],
  );
  // =====================================================================

  // Render
  return (
    <SafeAreaView style={globalStyles.container}>
      <View style={globalStyles.container}>
        {/* Old password input */}
        <TextInput
          control={control}
          errorMessage={errors.oldPassword?.message}
          icon="lock-outline"
          label="Old Password"
          name="oldPassword"
          rules={{required: 'Required'}}
        />

        {/* Password input */}
        <TextInput
          control={control}
          errorMessage={errors.password?.message}
          icon="lock-outline"
          label="New Password"
          name="password"
          rules={{required: 'Required'}}
        />

        {/* Confirm password input */}
        <TextInput
          control={control}
          errorMessage={errors.confirmPassword?.message}
          icon="lock-outline"
          label="Confirm New Password"
          name="confirmPassword"
          rules={{required: 'Required'}}
        />

        {/* Edit profile button */}
        <View style={styles.button}>
          <Button onPress={handleSubmit(onEdit)}>Save New Password</Button>
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
