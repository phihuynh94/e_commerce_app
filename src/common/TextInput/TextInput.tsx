// Import
import React, {ReactNode, useMemo} from 'react';
import {StyleSheet} from 'react-native';
import {TextInput as PaperTextInput} from 'react-native-paper';
import {IconSource} from 'react-native-paper/lib/typescript/components/Icon';
import {theme} from '../../styles/theme';

// Interface & Type
interface ITextInputProps {
  autoComplete?: string;
  icon?: IconSource;
  multiline?: boolean;
  onChangeText: (text: string) => void;
  placeholder?: string;
  value: string;
  secureTextEntry?: boolean;
}
// =====================================================================

// Component
const TextInput = ({
  autoComplete,
  icon,
  multiline,
  onChangeText,
  placeholder,
}: ITextInputProps) => {
  // useMemos
  const leftIcon: ReactNode = useMemo(() => {
    if (icon) {
      return (
        <PaperTextInput.Icon
          color={theme.colors.primary}
          name={icon}
          size={24}
          style={styles.icon}
        />
      );
    }
  }, []);
  // =====================================================================

  // Render
  return (
    <>
      <PaperTextInput
        autoComplete={autoComplete}
        left={leftIcon}
        mode="outlined"
        multiline={multiline}
        onChangeText={onChangeText}
        outlineColor={theme.colors.accent}
        placeholder={placeholder}
        placeholderTextColor={theme.colors.text}
        style={styles.textInput}
      />
    </>
  );
};

export default TextInput;

const styles = StyleSheet.create({
  icon: {
    alignItems: 'center',
  },
  textInput: {
    backgroundColor: theme.colors.white,
    marginBottom: 5,
    width: '100%',
  },
});
