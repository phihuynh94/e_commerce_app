// Import
import {useNavigation} from '@react-navigation/core';
import React, {useCallback, useState} from 'react';
import {
  Image,
  Keyboard,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {Button, TextInput} from '../../common';
import {register} from '../../redux/auth/auth.action';
import {useAppDispatch} from '../../redux/hooks';
import {ScreenNames} from '../../routes/routesHelpers';
import {globalStyles} from '../../styles';
import {theme} from '../../styles/theme';
// =====================================================================

// Images
const logo = require('../../assets/images/logo.png');
// =====================================================================

// Component
const RegisterScreen = () => {
  // Hooks
  const dispatch = useAppDispatch();
  const navigation = useNavigation();
  // =====================================================================

  // useStates
  const [confirmPassword, setConfirmPassword] = useState('');
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  // =====================================================================

  // useCallbacks
  const onSignup = useCallback(() => {
    console.log('press sign up');

    dispatch(register({email, name, password}));
  }, [dispatch, email, name, password]);

  const onSignin = useCallback(() => {
    navigation.navigate(ScreenNames.Login);
  }, [navigation]);
  // =====================================================================

  // Render
  return (
    <SafeAreaView style={globalStyles.container}>
      <Pressable onPress={Keyboard.dismiss} style={styles.container}>
        <View style={styles.alignCenter}>
          {/* Logo */}
          <Image source={logo} />

          {/* Header */}
          <Text style={styles.header}>Let's Get Started</Text>
          <View style={styles.subHeader}>
            <Text style={styles.smallText}>Create a new account</Text>
          </View>

          {/* Full name input */}
          <TextInput
            icon="account-outline"
            onChangeText={setName}
            placeholder="Full Name"
            value={name}
          />

          {/* Email input */}
          <TextInput
            icon="email-outline"
            onChangeText={setEmail}
            placeholder="Your Email"
            value={email}
          />

          {/* Password input */}
          <TextInput
            icon="lock-outline"
            onChangeText={setPassword}
            placeholder="Password"
            secureTextEntry={true}
            value={password}
          />

          {/* Confirm password input */}
          <TextInput
            icon="lock-outline"
            onChangeText={setConfirmPassword}
            placeholder="Confirm Password"
            secureTextEntry={true}
            value={confirmPassword}
          />
        </View>

        {/* Sign up button */}
        <Button onPress={onSignup}>sign up</Button>

        <View style={styles.alignCenter}>
          <Text style={styles.smallText}>
            Have an account?{' '}
            <Text onPress={onSignin} style={globalStyles.linkText}>
              Sign In
            </Text>
          </Text>
        </View>
      </Pressable>
    </SafeAreaView>
  );
};
// =====================================================================

// Styles
const styles = StyleSheet.create({
  alignCenter: {
    alignItems: 'center',
  },
  container: {
    ...globalStyles.container,
    justifyContent: 'center',
  },
  header: {
    ...theme.typography.h4,
    marginTop: 16,
  },
  smallText: {
    ...theme.typography.small,
    color: theme.colors.primaryGray,
    marginTop: 10,
  },
  subHeader: {
    marginBottom: 28,
    marginTop: 8,
  },
});
// =====================================================================

export default RegisterScreen;
