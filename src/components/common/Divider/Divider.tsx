// Imports
import React from 'react';
import {StyleSheet, View} from 'react-native';
import {theme} from '../../../styles/theme';
// =====================================================================

// Component
const Divider = () => {
  return (
    <View style={styles.container}>
      <View style={styles.divider} />
    </View>
  );
};
// =====================================================================

// Styles
const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  divider: {
    backgroundColor: theme.colors.secondaryGray,
    flex: 1,
    height: 1,
  },
});
// =====================================================================

export default Divider;
