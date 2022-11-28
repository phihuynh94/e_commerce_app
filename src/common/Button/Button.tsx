// Import
import React, {ReactNode, useMemo} from 'react';
import {StyleSheet, TextStyle, ViewStyle} from 'react-native';
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
  const containerStyle: ViewStyle = useMemo(() => {
    if (mode === 'outlined') {
      return {
        ...styles.container,
        backgroundColor: theme.colors.primaryWhite,
      };
    }

    return {
      ...styles.container,
    };
  }, [mode]);

  const labelStyle: TextStyle = useMemo(() => {
    if (mode === 'outlined') {
      return {
        ...styles.label,
        alignItems: 'center',
        color: theme.colors.primaryGray,
        flex: 1,
        textAlign: 'center',
      };
    }

    return {
      ...styles.label,
      color: theme.colors.primaryWhite,
    };
  }, [mode]);
  // =====================================================================

  // Render
  return (
    <PaperButton
      icon={icon}
      labelStyle={labelStyle}
      mode={mode}
      onPress={onPress}
      style={containerStyle}
    >
      {children}
    </PaperButton>
  );
};
// =====================================================================

// Styles
const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.primaryBlue,
    marginVertical: 5,
    padding: 5,
    width: '100%',
  },
  label: {
    ...theme.typography.h5,
  },
});
// =====================================================================

export default Button;
