// Import
import {useNavigation} from '@react-navigation/core';
import React, {useCallback, useEffect} from 'react';
import {useForm} from 'react-hook-form';
import {
  Image,
  Keyboard,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {Button, TextInput} from '../../components/common';
import {register} from '../../redux/auth/auth.action';
import {useRegisterState, useTokenState} from '../../redux/auth/auth.selector';
import {useAppDispatch} from '../../redux/hooks';
import {RouteNames, ScreenNames} from '../../routes/routesHelpers';
import {globalStyles} from '../../styles';
import {theme} from '../../styles/theme';
// =====================================================================

// Images
const logo = require('../../assets/images/logo.png');
// =====================================================================

// Interface
interface IRegistrationFormData {
  confirmPassword: string;
  email: string;
  name: string;
  password: string;
}
// =====================================================================

// Component
const RegisterScreen = () => {
  // hooks
  const dispatch = useAppDispatch();

  const {
    control,
    formState: {errors},
    handleSubmit,
  } = useForm<IRegistrationFormData>();

  const navigation = useNavigation();
  // =====================================================================

  // useSelectors
  const {registering} = useRegisterState();

  const token = useTokenState();
  // =====================================================================

  // useCallbacks
  const onSignup = useCallback(
    ({email, name, password}: IRegistrationFormData) => {
      dispatch(register({email, name, password}));
    },
    [dispatch],
  );

  const onSignin = useCallback(() => {
    navigation.navigate(ScreenNames.Login);
  }, [navigation]);
  // =====================================================================

  // useEffects
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
          <Text style={styles.header}>Let's Get Started</Text>
          <View style={styles.subHeader}>
            <Text style={styles.smallText}>Create a new account</Text>
          </View>

          {/* Full name input */}
          <TextInput
            control={control}
            errorMessage={errors.name?.message}
            icon="account-outline"
            label="Full Name"
            name="name"
            rules={{required: 'Required'}}
          />

          {/* Email input */}
          <TextInput
            control={control}
            errorMessage={errors.email?.message}
            icon="email-outline"
            label="Email"
            name="email"
            rules={{required: 'Required'}}
          />

          {/* Password input */}
          <TextInput
            control={control}
            errorMessage={errors.password?.message}
            icon="lock-outline"
            label="Password"
            name="password"
            rules={{required: 'Required'}}
            secureTextEntry={true}
          />

          {/* Confirm password input */}
          <TextInput
            control={control}
            errorMessage={errors.confirmPassword?.message}
            icon="lock-outline"
            label="Confirm Password"
            name="confirmPassword"
            rules={{required: 'Required'}}
            secureTextEntry={true}
          />
        </View>

        {/* Sign up button */}
        <Button loading={registering} onPress={handleSubmit(onSignup)}>
          sign up
        </Button>

        {/* Sign in link */}
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
