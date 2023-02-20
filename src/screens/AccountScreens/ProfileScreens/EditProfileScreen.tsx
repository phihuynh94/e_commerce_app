// Imports
import React, {useCallback, useState} from 'react';
import {SafeAreaView, StyleSheet, View} from 'react-native';
import {Button, TextInput} from '../../../common';
import {globalStyles} from '../../../styles';
// =====================================================================

// Component
const EditProfileScreen = () => {
  // useStates
  const [birthdate, setBirthDate] = useState('');
  const [email, setEmail] = useState('');
  const [fullName, setFullName] = useState('');
  const [gender, setGender] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  // =====================================================================

  // useCallbacks
  const onEdit = useCallback(() => {}, []);
  // =====================================================================

  // Render
  return (
    <SafeAreaView style={globalStyles.flex}>
      <View style={globalStyles.container}>
        {/* Full name input */}
        <TextInput
          autoComplete="name"
          icon="account-outline"
          onChangeText={setFullName}
          placeholder="Full Name"
          value={fullName}
        />

        {/* Email input */}
        <TextInput
          autoComplete="email"
          icon="email-outline"
          onChangeText={setEmail}
          placeholder="Email"
          value={email}
        />

        {/* Birthday input */}
        <TextInput
          icon="calendar-outline"
          onChangeText={setBirthDate}
          placeholder="Birthday"
          value={birthdate}
        />

        {/* Gender input */}
        <TextInput
          icon="gender-male-female"
          onChangeText={setGender}
          placeholder="Gender"
          value={gender}
        />

        {/* Phone number input */}
        <TextInput
          autoComplete="tel"
          icon="phone-outline"
          onChangeText={setPhoneNumber}
          placeholder="Phone Number"
          value={phoneNumber}
        />

        {/* Edit profile button */}
        <View style={styles.button}>
          <Button onPress={onEdit}>Save Changes</Button>
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
