// Import
import React, {useMemo} from 'react';
import {StyleProp, TextStyle, ViewStyle} from 'react-native';
import {Button as PaperButton} from 'react-native-paper';
import {theme} from '../../../App';

// Interface & Type
interface IButtonProps {
  icon?: string;
  label: string;
  loading?: boolean;
  mode?: 'contained' | 'outlined';
  onPress: () => void;
}
// =====================================================================

// Component
const Button = ({
  icon,
  label,
  loading,
  mode = 'contained',
  onPress,
}: IButtonProps) => {
  // useMemos
  const buttonStyle: StyleProp<ViewStyle> = useMemo(() => {
    return {
      width: '100%',
      padding: 5,
      marginVertical: 5,
    };
  }, []);

  const buttonLabelStyle: StyleProp<TextStyle> = useMemo(() => {
    switch (mode) {
      case 'outlined':
        return {
          flex: 1,
          color: theme.colors.text,
          alignItems: 'center',
          textAlign: 'center',
          fontSize: 14,
          fontWeight: '700',
          lineHeight: 25,
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

  const contentStyle: StyleProp<ViewStyle> = useMemo(() => {
    if (icon)
      return {
        justifyContent: 'flex-start',
      };
  }, []);
  // =====================================================================

  // Render
  return (
    <PaperButton
      contentStyle={contentStyle}
      icon={icon}
      labelStyle={buttonLabelStyle}
      loading={loading}
      mode={mode}
      onPress={onPress}
      style={buttonStyle}>
      {label}
    </PaperButton>
  );
};

export default Button;
