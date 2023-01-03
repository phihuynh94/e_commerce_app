import {StyleSheet} from 'react-native';
import {theme} from './theme';

export const staticValues = {
  iconSize: 24,
  padding: 16,
};

export const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    padding: staticValues.padding,
  },
  flex: {
    flex: 1,
  },
  linkText: {
    ...theme.typography.caption,
    color: theme.colors.primaryBlue,
  },
});
