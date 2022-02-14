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
  divider: {
    backgroundColor: theme.colors.accent,
    flex: 1,
    height: 1,
  },
  dividerContainer: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  header: {
    fontWeight: '700',
    fontSize: staticValues.largeFont,
    lineHeight: 24,
    marginTop: 16,
  },
  linkText: {
    color: theme.colors.primary,
    fontWeight: '700',
    fontSize: staticValues.smallFont,
    lineHeight: staticValues.lineHeight,
  },
  smallText: {
    color: theme.colors.text,
    fontWeight: '400',
    fontSize: staticValues.smallFont,
    lineHeight: staticValues.lineHeight,
    marginBottom: 28,
    marginTop: 8,
  },
});
