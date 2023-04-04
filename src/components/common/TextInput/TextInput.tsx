// Import
import React, {ReactNode, useEffect, useMemo, useRef} from 'react';
import {Control, Controller, RegisterOptions} from 'react-hook-form';
import {
  NativeSyntheticEvent,
  StyleSheet,
  TextInput as RNTextInput,
  TextInputFocusEventData,
  View,
} from 'react-native';
import {Text, TextInput as PaperTextInput} from 'react-native-paper';
import {IconSource} from 'react-native-paper/lib/typescript/components/Icon';
import {staticValues} from '../../../styles';
import {theme} from '../../../styles/theme';
// =====================================================================

// Interface & Type
interface ITextInputProps {
  blur?: boolean;
  control: Control<any>;
  defaultValue?: string;
  errorMessage?: string;
  icon?: IconSource;
  label?: string;
  multiline?: boolean;
  name: string;
  onBlur?: (e: NativeSyntheticEvent<TextInputFocusEventData>) => void;
  onChangeText?: (text: string) => void;
  onFocus?: (e: NativeSyntheticEvent<TextInputFocusEventData>) => void;
  placeholder?: string;
  rules?: RegisterOptions;
  secureTextEntry?: boolean;
}
// =====================================================================

// Component
const TextInput = ({
  blur,
  control,
  defaultValue,
  errorMessage,
  icon,
  label,
  multiline,
  name,
  onBlur,
  onChangeText,
  onFocus,
  placeholder,
  rules,
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
    <>
      <Controller
        control={control}
        defaultValue={defaultValue}
        name={name}
        render={({field: {onChange, value}}) => (
          <PaperTextInput
            activeOutlineColor={theme.colors.primaryBlue}
            error={!!errorMessage}
            label={label}
            left={leftIcon}
            mode="outlined"
            multiline={multiline}
            onBlur={onBlur}
            onChangeText={onChangeText || onChange}
            onFocus={onFocus}
            outlineColor={theme.colors.secondaryGray}
            placeholder={placeholder}
            placeholderTextColor={theme.colors.primaryGray}
            ref={textInputRef}
            secureTextEntry={secureTextEntry}
            selectionColor={theme.colors.primaryBlue}
            style={styles.textInput}
            value={value}
          />
        )}
        rules={rules}
      />

      {/* Error message */}
      {errorMessage && (
        <View style={styles.error}>
          <Text style={styles.errorMessage}>* {errorMessage}</Text>
        </View>
      )}
    </>
  );
};
// =====================================================================

// Styles
const styles = StyleSheet.create({
  error: {
    marginBottom: 10,
    width: '100%',
  },
  errorMessage: {
    color: theme.colors.primaryRed,
  },
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
