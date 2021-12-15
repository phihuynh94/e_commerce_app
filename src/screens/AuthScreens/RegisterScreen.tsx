// Import
import {useNavigation} from '@react-navigation/core';
import React, {useState} from 'react';
import {
  Image,
  Keyboard,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
} from 'react-native';
import {Button, TextInput} from 'react-native-paper';
import {SafeAreaView} from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/Ionicons';
import {appTheme} from '../../../App';
import {RouteNames} from '../../routes/routesHelper';

// Interface & Type

const logo = require('../../assets/images/logo.png');
// =====================================================================

// Component
const RegisterScreen = () => {
  // Hooks
  const navigation = useNavigation();
  // useSelectors

  // useState
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  // useEffect

  // useMemos

  // useCallback

  // Render
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <SafeAreaView style={styles.container}>
        {/* <Text>Register screen</Text> */}

        {/* Logo */}
        <Image source={logo} style={styles.logo} />

        {/* Header */}
        <Text style={styles.header}>Let's Get Started</Text>
        <Text style={styles.smallText}>Create a new account</Text>

        {/* FullName Input*/}
        <TextInput
          mode="outlined"
          outlineColor={appTheme.colors.accent}
          autoComplete="name"
          value={fullName}
          placeholder="Full Name"
          style={styles.input}
          onChangeText={setFullName}
          left={
            // <TextInput.Icon
            //   color={appTheme.colors.primary}
            //   name="bag-personal-outline"
            //   size={26}
            //   style={styles.icon}
            // />
            <Icon name="person-outline" size={26} />
          }
        />

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

        {/* ConfirmPassword input */}
        <TextInput
          mode="outlined"
          placeholder="Confirm Password"
          value={password}
          style={styles.input}
          outlineColor={appTheme.colors.accent}
          autoComplete="confirmPassword"
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

        <Button
          mode="contained"
          labelStyle={styles.buttonLabel}
          style={styles.button}>
          sign up
        </Button>

        <Text style={styles.smallText}>
          Have a account?{' '}
          <Text
            style={styles.linkText}
            onPress={() => navigation.navigate(RouteNames.Login)}>
            Sign In
          </Text>
        </Text>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
};

export default RegisterScreen;

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
