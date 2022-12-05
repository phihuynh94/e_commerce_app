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
  autoComplete?: string;
  blur?: boolean;
  icon?: IconSource;
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
  autoComplete,
  blur,
  icon,
  multiline,
  onBlur,
  onChangeText,
  onFocus,
  placeholder,
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
          name={icon}
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
      autoComplete={autoComplete}
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
