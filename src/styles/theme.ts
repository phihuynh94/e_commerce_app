import {
  DefaultTheme as NavDefaultTheme,
  Theme as NavTheme,
} from '@react-navigation/native';
import 'react-native-gesture-handler';
import {DefaultTheme as PaperDefaultTheme} from 'react-native-paper';
import {Theme as PaperTheme} from 'react-native-paper/lib/typescript/types';

export const navTheme: NavTheme = {
  ...NavDefaultTheme,
  colors: {
    ...NavDefaultTheme.colors,
    background: '#FFFFFF',
  },
};

export const paperTheme: PaperTheme = {
  ...PaperDefaultTheme,
  roundness: 5,
  colors: {
    ...PaperDefaultTheme.colors,
    primary: '#40BFFF',
    accent: '#EBF0FF',
    text: '#9098B1',
  },
};

export const theme = {
  ...navTheme,
  ...paperTheme,
  colors: {
    ...navTheme.colors,
    ...paperTheme.colors,
    dark: '#223263',
    white: '#FFFFFF',
  },
};
