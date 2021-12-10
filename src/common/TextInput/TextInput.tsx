// Import
import React, {useMemo} from 'react';
import {StyleProp, TextStyle, ViewStyle} from 'react-native';
import {TextInput as PaperTextInput} from 'react-native-paper';
import {theme} from '../../../App';

// Interface & Type
interface ITextInputProps {
  autoComplete: string;
  icon?: string;
  onChangeText: ((text: string) => void) & Function;
  placeholder: string;
  value: string;
}
// =====================================================================

// Component
const TextInput = ({
  autoComplete,
  icon,
  onChangeText,
  placeholder,
  value,
}: ITextInputProps) => {
  // useMemos
  const iconStyle: StyleProp<ViewStyle> = useMemo(() => {
    return {
      alignItems: 'center',
    };
  }, []);

  const textInputStyle: StyleProp<TextStyle> = useMemo(() => {
    return {
      backgroundColor: theme.colors.white,
      width: '100%',
      marginBottom: 5,
    };
  }, []);
  // =====================================================================

  // Render
  return (
    <PaperTextInput
      autoComplete={autoComplete}
      left={
        icon && (
          <PaperTextInput.Icon
            color={theme.colors.primary}
            name={icon}
            size={26}
            style={iconStyle}
          />
        )
      }
      mode="outlined"
      onChangeText={onChangeText}
      outlineColor={theme.colors.accent}
      placeholder={placeholder}
      style={textInputStyle}
      value={value}
    />
  );
};

export default TextInput;
