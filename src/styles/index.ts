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
  divider: {
    backgroundColor: theme.colors.secondaryGray,
    flex: 1,
    height: 1,
  },
  dividerContainer: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  flex: {
    flex: 1,
  },
  linkText: {
    ...theme.typography.caption,
    color: theme.colors.primaryBlue,
  },
});
