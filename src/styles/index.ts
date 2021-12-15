import {StyleSheet} from 'react-native';
import {theme} from '../../App';

export const globalStyles = StyleSheet.create({
  header: {
    fontWeight: '700',
    fontSize: 16,
    lineHeight: 24,
    marginBottom: 8,
  },
  linkText: {
    fontWeight: '700',
    fontSize: 12,
    lineHeight: 18,
    color: theme.colors.primary,
  },
});
