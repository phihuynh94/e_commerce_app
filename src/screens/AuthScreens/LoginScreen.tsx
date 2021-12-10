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
import {TextInput} from 'react-native-paper';
import {SafeAreaView} from 'react-native-safe-area-context';
import {theme} from '../../../App';
import {Button} from '../../common';
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
        <Text style={styles.smallText}>Sign in to continue</Text>

        {/* Email input */}
        <TextInput
          mode="outlined"
          placeholder="Your Email"
          value={email}
          style={styles.input}
          outlineColor={theme.colors.accent}
          autoComplete="email"
          left={
            <TextInput.Icon
              color={theme.colors.primary}
              name="email-outline"
              size={26}
              style={styles.icon}
            />
          }
          onChangeText={setEmail}
        />

        {/* Password input */}
        <TextInput
          mode="outlined"
          placeholder="Password"
          value={password}
          style={styles.input}
          outlineColor={theme.colors.accent}
          autoComplete="password"
          left={
            <TextInput.Icon
              color={theme.colors.primary}
              name="lock-outline"
              size={26}
              style={styles.icon}
            />
          }
          onChangeText={setPassword}
        />

        {/* Sign in button */}
        <Button label="sign in" mode="contained" onPress={pressSignin} />

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

        <View style={styles.forgotPassword}>
          <Text style={globalStyles.linkText} onPress={pressForgotPassword}>
            Forgot Password?
          </Text>
        </View>

        <Text style={styles.smallText}>
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
  icon: {
    alignItems: 'center',
  },
  input: {
    backgroundColor: theme.colors.white,
    width: '100%',
    marginBottom: 5,
  },
  logo: {
    marginTop: 50,
    marginBottom: 16,
  },
  smallText: {
    fontWeight: '400',
    fontSize: 12,
    lineHeight: 21.6,
    marginBottom: 28,
    color: theme.colors.text,
  },
});
