// Imports
import {useNavigation} from '@react-navigation/native';
import React, {useCallback} from 'react';
import {SafeAreaView, ScrollView, StyleSheet, View} from 'react-native';
import {Button} from '../../../common';
import AddressCard from '../../../components/AddressCard/AddressCard';
import {ScreenNames} from '../../../routes/routesHelpers';
import {globalStyles} from '../../../styles';
// =====================================================================

// Component
const AddressScreen = () => {
  // Hooks
  const navigation = useNavigation();
  // =====================================================================

  // useCallbacks
  const onAdd = useCallback(() => {
    navigation.navigate(ScreenNames.AddAddress, {type: 'add'});
  }, [navigation]);
  // =====================================================================

  // Render
  return (
    <SafeAreaView style={globalStyles.flex}>
      <ScrollView style={globalStyles.container}>
        {/* Addresses */}
        <View style={styles.addressCard}>
          <AddressCard />
        </View>

        <View style={styles.addressCard}>
          <AddressCard />
        </View>
      </ScrollView>

      {/* Add address button */}
      <View style={styles.button}>
        <Button onPress={onAdd}>Add Address</Button>
      </View>
    </SafeAreaView>
  );
};
// =====================================================================

// Styles
const styles = StyleSheet.create({
  addressCard: {
    marginBottom: 16,
  },
  button: {
    paddingHorizontal: 16,
  },
});
// =====================================================================

export default AddressScreen;
