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
import {theme} from '../../../App';
import {Button, TextInput} from '../../common';
import {RouteNames} from '../../routes/routesHelper';
import {globalStyles} from '../../styles';

// Interface & Type
const logo = require('../../assets/images/logo.png');
// =====================================================================

// Component
const LoginScreen = () => {
  // Hooks
  const navigation = useNavigation();
  // =====================================================================

  // useSelectors

  // =====================================================================

  // useState
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  // =====================================================================

  // useEffect

  // =====================================================================

  // useMemos

  // =====================================================================

  // useCallback
  const pressSignin = useCallback(() => {
    console.log('press sign in');
  }, []);

  const pressForgotPassword = useCallback(() => {
    console.log('press forgot password');
  }, []);

  const pressLoginGoogle = useCallback(() => {
    console.log('press login with google');
  }, []);

  const pressLoginFacebook = useCallback(() => {
    console.log('press login with facebook');
  }, []);

  const pressRegister = useCallback(() => {
    navigation.navigate(RouteNames.Register);
  }, []);
  // =====================================================================

  // Render
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <SafeAreaView style={styles.container}>
        {/* Logo */}
        <Image source={logo} style={styles.logo} />

        {/* Header */}
        <Text style={globalStyles.header}>Welcome to Lafyuu</Text>
        <Text style={globalStyles.smallText}>Sign in to continue</Text>

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
          value={password}
        />

        {/* Sign in button */}
        <Button label="sign in" onPress={pressSignin} />

        {/* Divider */}
        <View style={styles.dividerContainer}>
          <View style={styles.divider} />
          <View>
            <Text style={styles.divierText}>OR</Text>
          </View>
          <View style={styles.divider} />
        </View>

        {/* Login with Google button */}
        <Button
          label="login with google"
          mode="outlined"
          icon="google"
          onPress={pressLoginGoogle}
        />

        {/* Login with Facebook button */}
        <Button
          label="login with facebook"
          mode="outlined"
          icon="facebook"
          onPress={pressLoginFacebook}
        />

        {/* Forgot password text link */}
        <View style={styles.forgotPassword}>
          <Text style={globalStyles.linkText} onPress={pressForgotPassword}>
            Forgot Password?
          </Text>
        </View>

        {/* Register text link */}
        <Text style={globalStyles.smallText}>
          Don't have a account?{' '}
          <Text style={globalStyles.linkText} onPress={pressRegister}>
            Register
          </Text>
        </Text>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    padding: 15,
    alignItems: 'center',
  },
  divider: {
    flex: 1,
    height: 1,
    backgroundColor: theme.colors.accent,
  },
  dividerContainer: {
    marginVertical: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  divierText: {
    width: 50,
    textAlign: 'center',
    fontSize: 14,
    fontWeight: '700',
    lineHeight: 21,
    color: theme.colors.text,
  },
  forgotPassword: {
    marginTop: 16,
    marginBottom: 8,
  },
  logo: {
    marginTop: 50,
    marginBottom: 16,
  },
});
