// Import
import React, {ReactNode, useMemo} from 'react';
import {StyleProp, TextStyle, ViewStyle} from 'react-native';
import {TextInput as PaperTextInput} from 'react-native-paper';
import {IconSource} from 'react-native-paper/lib/typescript/components/Icon';
import {theme} from '../../styles/theme';

// Interface & Type
type ITextInputProps = React.ComponentProps<typeof PaperTextInput> & {
  icon?: IconSource;
};
// =====================================================================

// Component
const TextInput = ({icon, ...rest}: ITextInputProps) => {
  // useMemos
  const iconStyle: StyleProp<ViewStyle> = useMemo(() => {
    return {
      alignItems: 'center',
    };
  }, []);

  const leftIcon: ReactNode = useMemo(() => {
    if (icon) {
      return (
        <PaperTextInput.Icon
          color={theme.colors.primary}
          name={icon}
          size={24}
          style={iconStyle}
        />
      );
    }
  }, []);

  const textInputStyle: StyleProp<TextStyle> = useMemo(() => {
    return {
      backgroundColor: theme.colors.white,
      marginBottom: 5,
      width: '100%',
    };
  }, []);
  // =====================================================================

  // Render
  return (
    <>
      <PaperTextInput
        left={leftIcon}
        mode="outlined"
        outlineColor={theme.colors.accent}
        placeholderTextColor={theme.colors.text}
        style={textInputStyle}
        {...rest}
      />
    </>
  );
};

export default TextInput;
