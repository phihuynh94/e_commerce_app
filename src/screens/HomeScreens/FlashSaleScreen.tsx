// Import
import {RouteProp, useRoute} from '@react-navigation/native';
import React from 'react';
import {Dimensions, Image, ScrollView, StyleSheet, View} from 'react-native';
import {HomeStackParamList} from '../../routes/HomeRoutes';
import {staticValues} from '../../styles';

// Images
const offerBanner = require('../../assets/images/offer-banner.png');
// =====================================================================

// Interfaces & Types
type RoutePropType = RouteProp<HomeStackParamList, 'FlashSale'>;
// =====================================================================

// Component
const FlashSaleScreen = () => {
  // Hooks
  const route = useRoute<RoutePropType>();

  const {title, url} = route.params;
  // =====================================================================

  console.log(title);
  console.log(url);
  // useSelectors

  // =====================================================================

  // useStates

  // =====================================================================

  // useRefs

  // =====================================================================

  // useMemos

  // =====================================================================

  // useCallbacks

  // =====================================================================

  // useEffects

  // =====================================================================

  // Render
  return (
    <ScrollView style={styles.container}>
      <View style={styles.bannerContainer}>
        <Image source={offerBanner} />
      </View>
    </ScrollView>
  );
};

export default FlashSaleScreen;

const styles = StyleSheet.create({
  bannerContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 10,
    width: Dimensions.get('window').width - 50,
  },
  container: {
    padding: staticValues.padding,
  },
});
