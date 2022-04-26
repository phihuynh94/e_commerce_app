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
import {globalStyles, staticValues} from '../../styles';
import {theme} from '../../styles/theme';

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
    <SafeAreaView style={globalStyles.flex}>
      <Pressable
        onPress={Keyboard.dismiss}
        style={globalStyles.authScreensContainer}>
        {/* Logo */}
        <Image source={logo} />

        {/* Header */}
        <Text style={styles.header}>Welcome to Lafyuu</Text>
        <View style={styles.subHeader}>
          <Text style={globalStyles.smallText}>Sign in to continue</Text>
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
          <View>
            <Text style={styles.divierText}>OR</Text>
          </View>
          <View style={globalStyles.divider} />
        </View>

        {/* Login with Google button */}
        <Button mode="outlined" icon="google" onPress={onLoginGoogle}>
          login with google
        </Button>

        {/* Login with Facebook button */}
        <Button mode="outlined" icon="facebook" onPress={onLoginFacebook}>
          login with facebook
        </Button>

        {/* Forgot password text link */}
        <View style={styles.forgotPassword}>
          <Text style={globalStyles.linkText} onPress={onForgotPassword}>
            Forgot Password?
          </Text>
        </View>

        {/* Register text link */}
        <Text style={globalStyles.smallText}>
          Don't have a account?{' '}
          <Text style={globalStyles.linkText} onPress={onRegister}>
            Register
          </Text>
        </Text>
      </Pressable>
    </SafeAreaView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  divierText: {
    color: theme.colors.text,
    fontSize: staticValues.normalFont,
    fontWeight: '700',
    lineHeight: staticValues.lineHeight,
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
