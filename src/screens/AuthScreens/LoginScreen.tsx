// Import
import {useNavigation} from '@react-navigation/core';
import React, {useCallback, useEffect, useState} from 'react';
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
import {login} from '../../redux/auth/auth.action';
import {useLoginState, useTokenState} from '../../redux/auth/auth.selector';
import {useAppDispatch} from '../../redux/hooks';
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
  const dispatch = useAppDispatch();
  const navigation = useNavigation();
  // =====================================================================

  // useSelectors
  const {loggingIn} = useLoginState();

  const token = useTokenState();
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
    dispatch(login({email, password}));
  }, [dispatch, email, password]);
  // =====================================================================

  // useEffects
  // Navigate to Home screen
  useEffect(() => {
    if (token) {
      navigation.navigate(RouteNames.AppTab);
    }
  }, [navigation, token]);
  // =====================================================================

  // Render
  return (
    <SafeAreaView style={globalStyles.container}>
      <Pressable onPress={Keyboard.dismiss} style={styles.container}>
        <View style={styles.alignCenter}>
          {/* Logo */}
          <Image source={logo} />

          {/* Header */}
          <Text style={styles.header}>Welcome to Lafyuu</Text>
          <View style={styles.subHeader}>
            <Text style={styles.smallText}>Sign in to continue</Text>
          </View>

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
        </View>

        {/* Sign in button */}
        <Button loading={loggingIn} onPress={onSignin}>
          sign in
        </Button>

        {/* Divider */}
        <View style={styles.dividerContainer}>
          <View style={styles.divider} />
          <Text style={styles.dividerText}>OR</Text>
          <View style={styles.divider} />
        </View>

        {/* Login with Google button */}
        <Button icon="google" mode="outlined" onPress={onLoginGoogle}>
          login with google
        </Button>

        {/* Login with Facebook button */}
        <Button icon="facebook" mode="outlined" onPress={onLoginFacebook}>
          login with facebook
        </Button>

        <View style={styles.alignCenter}>
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
  divider: {
    backgroundColor: theme.colors.secondaryGray,
    flex: 1,
    height: 1,
  },
  dividerContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    marginVertical: 20,
  },
  dividerText: {
    ...theme.typography.h5,
    color: theme.colors.primaryGray,
    textAlign: 'center',
    width: 50,
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
