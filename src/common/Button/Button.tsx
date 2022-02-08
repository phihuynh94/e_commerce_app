// Import
import React, {useMemo} from 'react';
import {StyleProp, StyleSheet, TextStyle} from 'react-native';
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
  const buttonLabelStyle: StyleProp<TextStyle> = useMemo(() => {
    switch (mode) {
      case 'outlined':
        return {
          ...styles.label,
          alignItems: 'center',
          color: theme.colors.text,
          flex: 1,
          textAlign: 'center',
        };
      default:
        return {
          ...styles.label,
          color: theme.colors.white,
        };
    }
  }, []);
  // =====================================================================

  // Render
  return (
    <PaperButton
      labelStyle={buttonLabelStyle}
      mode={mode}
      style={styles.button}
      {...rest}>
      {children}
    </PaperButton>
  );
};

export default Button;

const styles = StyleSheet.create({
  button: {
    marginVertical: 5,
    padding: 5,
    width: '100%',
  },
  label: {
    fontSize: 14,
    fontWeight: '700',
    lineHeight: 25,
  },
});
