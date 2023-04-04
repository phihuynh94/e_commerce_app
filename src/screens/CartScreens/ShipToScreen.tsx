// Imports
import {useNavigation} from '@react-navigation/native';
import React, {useCallback} from 'react';
import {SafeAreaView, ScrollView, StyleSheet, View} from 'react-native';
import AddressCard from '../../components/AddressCard/AddressCard';
import {Button} from '../../components/common';
import {ScreenNames} from '../../routes/routesHelpers';
import {globalStyles} from '../../styles';
// =====================================================================

// Component
const ShipToScreen = () => {
  // Hooks
  const navigation = useNavigation();
  // =====================================================================

  // useCallbacks
  const onNext = useCallback(() => {
    navigation.navigate(ScreenNames.Payment);
  }, [navigation]);
  // =====================================================================

  // Render
  return (
    <SafeAreaView style={globalStyles.flex}>
      <ScrollView style={globalStyles.container}>
        <AddressCard />
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
  next: {
    paddingHorizontal: 16,
  },
});
// =====================================================================

export default ShipToScreen;
