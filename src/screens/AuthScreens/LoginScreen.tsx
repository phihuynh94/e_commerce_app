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
import {RouteNames, ScreenNames} from '../../routes/routesHelpers';
import {globalStyles} from '../../styles';
import {theme} from '../../styles/theme';
// =====================================================================

// Images
const logo = require('../../assets/images/logo.png');
// =====================================================================

// Component
const LoginScreen = () => {
  // Hooks
  const navigation = useNavigation();
  // =====================================================================

  // useStates
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  // =====================================================================

  // useCallbacks
  const onForgotPassword = useCallback(() => {
    console.log('press forgot password');
  }, []);

  const onLoginGoogle = useCallback(() => {
    console.log('press login with google');
  }, []);

  const onLoginFacebook = useCallback(() => {
    console.log('press login with facebook');
  }, []);

  const onRegister = useCallback(() => {
    navigation.navigate(ScreenNames.Register);
  }, [navigation]);

  const onSignin = useCallback(() => {
    navigation.navigate(RouteNames.AppTab);
  }, [navigation]);
  // =====================================================================

  // Render
  return (
    <SafeAreaView style={globalStyles.container}>
      <Pressable onPress={Keyboard.dismiss} style={styles.container}>
        {/* Logo */}
        <Image source={logo} />

        {/* Header */}
        <Text style={styles.header}>Welcome to Lafyuu</Text>
        <View style={styles.subHeader}>
          <Text style={styles.smallText}>Sign in to continue</Text>
        </View>

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

        {/* Sign in button */}
        <Button onPress={onSignin}>sign in</Button>

        {/* Divider */}
        <View style={styles.dividerContainer}>
          <View style={globalStyles.divider} />
          <Text style={styles.divierText}>OR</Text>
          <View style={globalStyles.divider} />
        </View>

        {/* Login with Google button */}
        <Button icon="google" mode="outlined" onPress={onLoginGoogle}>
          login with google
        </Button>

        {/* Login with Facebook button */}
        <Button icon="facebook" mode="outlined" onPress={onLoginFacebook}>
          login with facebook
        </Button>

        {/* Forgot password text link */}
        <View style={styles.forgotPassword}>
          <Text onPress={onForgotPassword} style={globalStyles.linkText}>
            Forgot Password?
          </Text>
        </View>

        {/* Register text link */}
        <Text style={styles.smallText}>
          Don't have a account?{' '}
          <Text onPress={onRegister} style={globalStyles.linkText}>
            Register
          </Text>
        </Text>
      </Pressable>
    </SafeAreaView>
  );
};
// =====================================================================

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
  },
  divierText: {
    ...theme.typography.h5,
    color: theme.colors.primaryGray,
    textAlign: 'center',
    width: 50,
  },
  dividerContainer: {
    ...globalStyles.dividerContainer,
    marginVertical: 20,
  },
  forgotPassword: {
    marginTop: 16,
  },
  header: {
    ...theme.typography.h4,
    marginTop: 16,
  },
  smallText: {
    ...theme.typography.small,
    color: theme.colors.primaryGray,
  },
  subHeader: {
    marginBottom: 28,
    marginTop: 8,
  },
});
// =====================================================================

export default LoginScreen;
