// Import
import React, {ReactNode, useEffect, useMemo, useRef} from 'react';
import {
  NativeSyntheticEvent,
  StyleSheet,
  TextInput as RNTextInput,
  TextInputFocusEventData,
} from 'react-native';
import {TextInput as PaperTextInput} from 'react-native-paper';
import {IconSource} from 'react-native-paper/lib/typescript/components/Icon';
import {staticValues} from '../../styles';
import {theme} from '../../styles/theme';
// =====================================================================

// Interface & Type
interface ITextInputProps {
  blur?: boolean;
  icon?: IconSource;
  label?: string;
  multiline?: boolean;
  onBlur?: (e: NativeSyntheticEvent<TextInputFocusEventData>) => void;
  onChangeText: (text: string) => void;
  onFocus?: (e: NativeSyntheticEvent<TextInputFocusEventData>) => void;
  placeholder?: string;
  value: string;
  secureTextEntry?: boolean;
}
// =====================================================================

// Component
const TextInput = ({
  blur,
  icon,
  label,
  multiline,
  onBlur,
  onChangeText,
  onFocus,
  placeholder,
  secureTextEntry,
}: ITextInputProps) => {
  // useRefs
  const textInputRef = useRef<RNTextInput>(null);
  // =====================================================================

  // useMemos
  const leftIcon: ReactNode = useMemo(() => {
    if (icon) {
      return (
        <PaperTextInput.Icon
          color={theme.colors.primaryBlue}
          icon={icon}
          size={staticValues.iconSize}
          style={styles.icon}
        />
      );
    }
  }, [icon]);
  // =====================================================================

  // useEffects
  useEffect(() => {
    if (blur) {
      textInputRef.current?.blur();
    }
  }, [blur]);
  // =====================================================================

  // Render
  return (
    <PaperTextInput
      activeOutlineColor={theme.colors.primaryBlue}
      label={label}
      left={leftIcon}
      mode="outlined"
      multiline={multiline}
      onBlur={onBlur}
      onChangeText={onChangeText}
      onFocus={onFocus}
      outlineColor={theme.colors.secondaryGray}
      placeholder={placeholder}
      placeholderTextColor={theme.colors.primaryGray}
      ref={textInputRef}
      secureTextEntry={secureTextEntry}
      selectionColor={theme.colors.primaryBlue}
      style={styles.textInput}
    />
  );
};
// =====================================================================

// Styles
const styles = StyleSheet.create({
  icon: {
    alignItems: 'center',
  },
  textInput: {
    backgroundColor: theme.colors.primaryWhite,
    marginBottom: 5,
    width: '100%',
  },
});
// =====================================================================

export default TextInput;
