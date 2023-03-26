// Import
import React, {ReactNode, useMemo} from 'react';
import {StyleSheet, TextStyle} from 'react-native';
import {Button as PaperButton} from 'react-native-paper';
import {IconSource} from 'react-native-paper/lib/typescript/components/Icon';
import {theme} from '../../styles/theme';
// =====================================================================

// Interface & Type
interface IButtonProps {
  children: ReactNode;
  icon?: IconSource;
  loading?: boolean;
  mode?: 'contained' | 'outlined';
  onPress: () => void;
}
// =====================================================================

// Component
const Button = ({
  children,
  icon,
  loading,
  mode = 'contained',
  onPress,
}: IButtonProps) => {
  // useMemos
  const buttonColor = useMemo(() => {
    if (mode === 'outlined') {
      return theme.colors.primaryWhite;
    }

    return theme.colors.primaryBlue;
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
      buttonColor={buttonColor}
      icon={icon}
      labelStyle={labelStyle}
      loading={loading}
      mode={mode}
      onPress={onPress}
      style={styles.container}
      uppercase>
      {children}
    </PaperButton>
  );
};
// =====================================================================

// Styles
const styles = StyleSheet.create({
  container: {
    borderRadius: 10,
    marginVertical: 5,
    padding: 5,
  },
  label: {
    ...theme.typography.h5,
  },
});
// =====================================================================

export default Button;
