// Import
import React, {ReactNode, useMemo} from 'react';
import {StyleProp, StyleSheet, TextStyle} from 'react-native';
import {Button as PaperButton} from 'react-native-paper';
import {IconSource} from 'react-native-paper/lib/typescript/components/Icon';
import {theme} from '../../styles/theme';

// Interface & Type
interface IButtonProps {
  children: ReactNode;
  icon?: IconSource;
  mode?: 'contained' | 'outlined';
  onPress: () => void;
}
// =====================================================================

// Component
const Button = ({
  children,
  icon,
  mode = 'contained',
  onPress,
}: IButtonProps) => {
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
      icon={icon}
      labelStyle={buttonLabelStyle}
      mode={mode}
      onPress={onPress}
      style={styles.button}>
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
