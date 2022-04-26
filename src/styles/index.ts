import {StyleSheet} from 'react-native';
import {theme} from './theme';

export const staticValues = {
  iconSize: 30,
  largeFont: 16,
  lineHeight: 20,
  normalFont: 14,
  padding: 15,
  smallFont: 12,
};

export const globalStyles = StyleSheet.create({
  authScreensContainer: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
    padding: staticValues.padding,
  },
  container: {
    flex: 1,
    padding: staticValues.padding,
  },
  divider: {
    backgroundColor: theme.colors.accent,
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
    color: theme.colors.primary,
    fontSize: staticValues.smallFont,
    fontWeight: '700',
    lineHeight: staticValues.lineHeight,
  },
  smallText: {
    color: theme.colors.text,
    fontSize: staticValues.smallFont,
    fontWeight: '400',
    lineHeight: staticValues.lineHeight,
  },
});
