// Import
import {RouteProp, useRoute} from '@react-navigation/native';
import React, {useCallback} from 'react';
import {
  Dimensions,
  FlatList,
  Image,
  SafeAreaView,
  StyleSheet,
  View,
} from 'react-native';
import {AppStackParamList} from '../../../App';
import ProductCard from '../../components/Product/ProductCard/ProductCard';
import {products} from '../../mockData/products-mock';
import {globalStyles} from '../../styles';

// Images
const offerBanner = require('../../assets/images/offer-banner.png');
// =====================================================================

// Interfaces & Types
type RoutePropType = RouteProp<AppStackParamList, 'FlashSale'>;
// =====================================================================

// Component
const FlashSaleScreen = () => {
  // Hooks
  const route = useRoute<RoutePropType>();

  const {title, url} = route.params;
  // =====================================================================

  // useCallbacks
  // Render header
  const renderHeader = useCallback(() => {
    return (
      <View style={styles.bannerContainer}>
        <Image source={offerBanner} />
      </View>
    );
  }, []);

  // Render product card
  const renderProductCard = useCallback(({item}) => {
    return <ProductCard product={item} />;
  }, []);
  // =====================================================================

  // Render
  return (
    <SafeAreaView style={globalStyles.flex}>
      <View style={globalStyles.container}>
        <FlatList
          data={products}
          ListHeaderComponent={renderHeader}
          numColumns={2}
          pagingEnabled
          renderItem={renderProductCard}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </SafeAreaView>
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
});
