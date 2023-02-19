// Imports
import {useNavigation} from '@react-navigation/native';
import React, {useCallback} from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import AntIcon from 'react-native-vector-icons/AntDesign';
import {Button} from '../../common';
import {ScreenNames} from '../../routes/routesHelpers';
import {theme} from '../../styles/theme';
// =====================================================================

// Component
const SuccessScreen = () => {
  // Hooks
  const navigation = useNavigation();
  // =====================================================================

  // useCallbacks
  const onBack = useCallback(() => {
    navigation.navigate(ScreenNames.Order);
  }, [navigation]);
  // =====================================================================

  // Render
  return (
    <SafeAreaView style={styles.container}>
      <AntIcon color={theme.colors.primaryBlue} name="checkcircle" size={80} />

      <View style={styles.row}>
        <Text style={theme.typography.h1}>Success</Text>
      </View>
      <View style={styles.row}>
        <Text>Thank you for shopping with us!</Text>
      </View>
      <View style={styles.row}>
        <Button onPress={onBack}>Back To Order</Button>
      </View>
    </SafeAreaView>
  );
};
// =====================================================================

// Styles
const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
  row: {
    marginVertical: 10,
  },
});
// =====================================================================

export default SuccessScreen;
