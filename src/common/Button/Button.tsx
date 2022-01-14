// Import
import React, {useMemo} from 'react';
import {StyleProp, TextStyle, ViewStyle} from 'react-native';
import {Button as PaperButton} from 'react-native-paper';
import {theme} from '../../styles/theme';

// Interface & Type
type IButtonProps = React.ComponentProps<typeof PaperButton> & {
  mode?: 'contained' | 'outlined';
};
// =====================================================================

// Component
const Button = ({children, mode = 'contained', ...rest}: IButtonProps) => {
  // useMemos
  const buttonStyle: StyleProp<ViewStyle> = useMemo(() => {
    return {
      marginVertical: 5,
      padding: 5,
      width: '100%',
    };
  }, []);

  const buttonLabelStyle: StyleProp<TextStyle> = useMemo(() => {
    switch (mode) {
      case 'outlined':
        return {
          alignItems: 'center',
          color: theme.colors.text,
          flex: 1,
          fontSize: 14,
          fontWeight: '700',
          lineHeight: 25,
          textAlign: 'center',
        };
      default:
        return {
          color: theme.colors.white,
          fontWeight: '700',
          fontSize: 14,
          lineHeight: 25,
        };
    }
  }, []);
  // =====================================================================

  // Render
  return (
    <PaperButton
      labelStyle={buttonLabelStyle}
      mode={mode}
      style={buttonStyle}
      {...rest}>
      {children}
    </PaperButton>
  );
};

export default Button;
