// Import
import {useNavigation} from '@react-navigation/core';
import React, {useState} from 'react';
import {
  Image,
  Keyboard,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import {Button, TextInput} from 'react-native-paper';
import {SafeAreaView} from 'react-native-safe-area-context';
import {appTheme} from '../../../App';
import {RouteNames} from '../../routes/routesHelper';

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

  // =====================================================================

  // Render
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <SafeAreaView style={styles.container}>
        {/* Logo */}
        <Image source={logo} style={styles.logo} />

        {/* Header */}
        <Text style={styles.header}>Welcome to Lafyuu</Text>
        <Text style={styles.smallText}>Sign in to continue</Text>

        {/* Email input */}
        <TextInput
          mode="outlined"
          placeholder="Your Email"
          value={email}
          style={styles.input}
          outlineColor={appTheme.colors.accent}
          autoComplete="email"
          left={
            <TextInput.Icon
              color={appTheme.colors.primary}
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
          outlineColor={appTheme.colors.accent}
          autoComplete="password"
          left={
            <TextInput.Icon
              color={appTheme.colors.primary}
              name="lock-outline"
              size={26}
              style={styles.icon}
            />
          }
          onChangeText={setPassword}
        />

        {/* Sign in button */}
        <Button
          mode="contained"
          labelStyle={styles.buttonLabel}
          style={styles.button}>
          sign in
        </Button>

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
          mode="outlined"
          labelStyle={styles.socialButtonLabel}
          icon="google"
          style={styles.button}
          contentStyle={styles.socialButtonIcon}>
          login with google
        </Button>

        {/* Login with Facebook button */}
        <Button
          mode="outlined"
          labelStyle={styles.socialButtonLabel}
          icon="facebook"
          style={styles.button}
          contentStyle={styles.socialButtonIcon}>
          login with facebook
        </Button>

        <View style={styles.forgotPassword}>
          <Text style={styles.linkText}>Forgot Password?</Text>
        </View>

        <Text style={styles.smallText}>
          Don't have a account?{' '}
          <Text
            style={styles.linkText}
            onPress={() => navigation.navigate(RouteNames.Register)}>
            Register
          </Text>
        </Text>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  button: {
    width: '100%',
    padding: 5,
    marginVertical: 5,
  },
  buttonLabel: {
    color: appTheme.colors.white,
    fontWeight: '700',
    fontSize: 14,
    lineHeight: 25,
  },
  container: {
    padding: 15,
    alignItems: 'center',
  },
  divider: {
    flex: 1,
    height: 1,
    backgroundColor: appTheme.colors.accent,
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
    color: appTheme.colors.text,
  },
  forgotPassword: {
    marginTop: 16,
    marginBottom: 8,
  },
  header: {
    fontWeight: '700',
    fontSize: 16,
    lineHeight: 24,
    marginBottom: 8,
  },
  icon: {
    alignItems: 'center',
  },
  input: {
    backgroundColor: appTheme.colors.white,
    width: '100%',
    marginBottom: 5,
  },
  linkText: {
    fontWeight: '700',
    fontSize: 12,
    lineHeight: 18,
    color: appTheme.colors.primary,
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
    color: appTheme.colors.text,
  },
  socialButtonLabel: {
    flex: 1,
    color: appTheme.colors.text,
    alignItems: 'center',
    textAlign: 'center',
    fontSize: 14,
    fontWeight: '700',
    lineHeight: 25,
  },
  socialButtonIcon: {
    justifyContent: 'flex-start',
  },
});
