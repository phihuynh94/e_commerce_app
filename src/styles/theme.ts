import {DefaultTheme, Theme as NavTheme} from '@react-navigation/native';
import 'react-native-gesture-handler';
import {colors} from './colors';
import {ThemeColors} from './themeColors';
import {ThemeTypography, typography} from './typography';

export const navTheme: NavTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: '#FFFFFF',
  },
};

interface Theme {
  colors: ThemeColors;
  typography: ThemeTypography;
}

export const theme: Theme = {
  colors: colors,
  typography: typography,
};
