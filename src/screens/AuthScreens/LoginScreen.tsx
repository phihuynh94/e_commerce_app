// Import
import React, {useState} from 'react';
import {Dimensions, Image, StyleSheet, Text} from 'react-native';
import {TextInput} from 'react-native-paper';
import {SafeAreaView} from 'react-native-safe-area-context';

// Interface & Type
const logo = require('../../assets/images/logo.png');

// Component
const LoginScreen = () => {
  // Hooks

  // useSelectors

  // useState
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // useEffect

  // useMemos

  // useCallback

  // Render
  return (
    <SafeAreaView style={styles.container}>
      <Image source={logo} style={styles.logo} />
      <Text style={styles.header}>Welcome to Lafyuu 1</Text>
      <Text style={styles.normalText}>Sign in to continue</Text>

      <TextInput
        activeOutlineColor="#40BFFF"
        mode="outlined"
        placeholder="Your email"
        value={email}
        style={styles.input}
        outlineColor="#EBF0FF"
        autoComplete="email"
        left={
          <TextInput.Icon
            color="#40BFFF"
            name="email-outline"
            size={26}
            style={styles.icon}
          />
        }
      />

      <TextInput
        activeOutlineColor="#40BFFF"
        mode="outlined"
        placeholder="Password"
        value={password}
        style={styles.input}
        outlineColor="#EBF0FF"
        autoComplete="password"
        left={
          <TextInput.Icon
            color="#40BFFF"
            name="lock-outline"
            size={26}
            style={styles.icon}
          />
        }
      />
    </SafeAreaView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    padding: 15,
    alignItems: 'center',
  },
  input: {
    backgroundColor: '#FFFFFF',
    width: Dimensions.get('window').width - 50,
  },
  icon: {
    alignItems: 'center',
  },
  logo: {
    marginTop: 50,
    marginBottom: 16,
  },
  header: {
    fontWeight: '700',
    fontSize: 16,
    lineHeight: 24,
    marginBottom: 8,
  },
  normalText: {
    fontWeight: '400',
    fontSize: 12,
    lineHeight: 21.6,
    marginBottom: 28,
    color: '#9098B1',
  },
});
