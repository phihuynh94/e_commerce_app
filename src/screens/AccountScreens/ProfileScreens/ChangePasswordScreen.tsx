// Imports
import React, {useCallback, useState} from 'react';
import {SafeAreaView, StyleSheet, View} from 'react-native';
import {Button, TextInput} from '../../../common';
import {globalStyles} from '../../../styles';
// =====================================================================

// Component
const EditProfileScreen = () => {
  // useStates
  const [oldPassword, setOldPassword] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  // =====================================================================

  // useCallbacks
  const onEdit = useCallback(() => {}, []);
  // =====================================================================

  // Render
  return (
    <SafeAreaView style={globalStyles.container}>
      <View style={globalStyles.container}>
        {/* Old password input */}
        <TextInput
          icon="lock-outline"
          onChangeText={setOldPassword}
          placeholder="Old Password"
          value={oldPassword}
        />

        {/* Password input */}
        <TextInput
          icon="lock-outline"
          onChangeText={setPassword}
          placeholder="New Password"
          value={password}
        />

        {/* Confirm password input */}
        <TextInput
          icon="lock-outline"
          onChangeText={setConfirmPassword}
          placeholder="Confirm New Password"
          value={confirmPassword}
        />

        {/* Edit profile button */}
        <View style={styles.button}>
          <Button onPress={onEdit}>Save New Password</Button>
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
