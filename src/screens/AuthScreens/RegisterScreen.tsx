// Import
import {useNavigation} from '@react-navigation/core';
import React, {useCallback, useState} from 'react';
import {
  Image,
  Keyboard,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Button, TextInput} from '../../common';
import {ScreenNames} from '../../routes/routesHelpers';
import {globalStyles, staticValues} from '../../styles';

// Images
const logo = require('../../assets/images/logo.png');
// =====================================================================

// Interface & Type

// =====================================================================

// Component
const RegisterScreen = () => {
  // Hooks
  const navigation = useNavigation();
  // =====================================================================

  // useStates
  const [confirmPassword, setConfirmPassword] = useState('');
  const [email, setEmail] = useState('');
  const [fullName, setFullName] = useState('');
  const [password, setPassword] = useState('');

  // =====================================================================

  // useMemos

  // =====================================================================

  // useCallbacks
  const onSignup = useCallback(() => {
    console.log('press sign up');
  }, []);

  const onSignin = useCallback(() => {
    navigation.navigate(ScreenNames.Login);
  }, [navigation]);
  // =====================================================================

  // useSelectors

  // =====================================================================

  // useEffects

  // =====================================================================

  // Render
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <SafeAreaView style={globalStyles.authScreensContainer}>
        {/* Logo */}
        <Image source={logo} />

        {/* Header */}
        <Text style={styles.header}>Let's Get Started</Text>
        <View style={styles.subHeader}>
          <Text style={globalStyles.smallText}>Create a new account</Text>
        </View>

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
          placeholder="Your Email"
          value={email}
        />

        {/* Password input */}
        <TextInput
          autoComplete="password"
          icon="lock-outline"
          onChangeText={setPassword}
          placeholder="Password"
          secureTextEntry={true}
          value={password}
        />

        {/* Confirm password input */}
        <TextInput
          autoComplete="password"
          icon="lock-outline"
          onChangeText={setConfirmPassword}
          placeholder="Confirm Password"
          secureTextEntry={true}
          value={confirmPassword}
        />

        {/* Sign up button */}
        <Button onPress={onSignup}>sign up</Button>

        <Text style={globalStyles.smallText}>
          Have an account?{' '}
          <Text style={globalStyles.linkText} onPress={onSignin}>
            Sign In
          </Text>
        </Text>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
};

export default RegisterScreen;

const styles = StyleSheet.create({
  header: {
    fontWeight: '700',
    fontSize: staticValues.largeFont,
    lineHeight: 24,
    marginTop: 16,
  },
  subHeader: {
    marginBottom: 28,
    marginTop: 8,
  },
});
