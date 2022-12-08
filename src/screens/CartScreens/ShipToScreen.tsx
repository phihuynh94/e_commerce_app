// Imports
import {useNavigation} from '@react-navigation/native';
import React, {useCallback} from 'react';
import {
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import FeatherIcon from 'react-native-vector-icons/Feather';
import {Button} from '../../common';
import {ScreenNames} from '../../routes/routesHelpers';
import {globalStyles, staticValues} from '../../styles';
import {theme} from '../../styles/theme';
// =====================================================================

// Component
const ShipToScreen = () => {
  // Hooks
  const navigation = useNavigation();
  // =====================================================================

  // useCallbacks
  const onEdit = useCallback(() => {}, []);

  const onNext = useCallback(() => {
    navigation.navigate(ScreenNames.Payment);
  }, [navigation]);

  const onTrashIcon = useCallback(() => {}, []);
  // =====================================================================

  // Render
  return (
    <SafeAreaView style={globalStyles.flex}>
      <ScrollView style={globalStyles.container}>
        <View style={styles.container}>
          {/* Name */}
          <View style={styles.text}>
            <Text style={theme.typography.h5}>Phi Huynh</Text>
          </View>

          {/* Address */}
          <View style={styles.text}>
            <Text>123 S Street Ave, Denver, CO 80392</Text>
          </View>

          {/* Phone number */}
          <View style={styles.text}>
            <Text>303-123-4567</Text>
          </View>

          <View style={styles.row}>
            {/* Edit button */}
            <View style={styles.button}>
              <Button onPress={onEdit}>Edit</Button>
            </View>

            {/* Trash icon */}
            <Pressable onPress={onTrashIcon} style={styles.icon}>
              <FeatherIcon
                color={theme.colors.primaryGray}
                name="trash"
                size={staticValues.iconSize}
              />
            </Pressable>
          </View>
        </View>
      </ScrollView>

      {/* Next button */}
      <View style={styles.next}>
        <Button onPress={onNext}>Next</Button>
      </View>
    </SafeAreaView>
  );
};
// =====================================================================

// Styles
const styles = StyleSheet.create({
  button: {
    flex: 4,
  },
  container: {
    borderColor: theme.colors.primaryBlue,
    borderRadius: 5,
    borderWidth: 1,
    padding: 16,
  },
  icon: {
    flex: 1,
    marginLeft: 20,
  },
  next: {
    paddingHorizontal: 16,
  },
  row: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  text: {
    marginVertical: 10,
  },
});
// =====================================================================

export default ShipToScreen;
