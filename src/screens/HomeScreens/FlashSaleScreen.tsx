// Import
import React, {useCallback} from 'react';
import {
  Dimensions,
  FlatList,
  Image,
  SafeAreaView,
  StyleSheet,
  View,
} from 'react-native';
import ProductCard from '../../components/Product/ProductCard/ProductCard';
import {products} from '../../mockData/products-mock';
import {globalStyles} from '../../styles';
// =====================================================================

// Images
const offerBanner = require('../../assets/images/offer-banner.png');
// =====================================================================

// Component
const FlashSaleScreen = () => {
  // useCallbacks
  const renderHeader = useCallback(() => {
    return (
      <View style={styles.bannerContainer}>
        <Image source={offerBanner} />
      </View>
    );
  }, []);

  const renderProductCard = useCallback(({item}) => {
    return <ProductCard product={item} />;
  }, []);
  // =====================================================================

  // Render
  return (
    <SafeAreaView style={globalStyles.flex}>
      <View style={globalStyles.container}>
        <FlatList
          ListHeaderComponent={renderHeader}
          data={products}
          numColumns={2}
          pagingEnabled
          renderItem={renderProductCard}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </SafeAreaView>
  );
};
// =====================================================================

// Styles
const styles = StyleSheet.create({
  bannerContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 10,
    width: Dimensions.get('window').width - 50,
  },
});
// =====================================================================

export default FlashSaleScreen;
