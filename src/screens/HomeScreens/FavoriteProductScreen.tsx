// Import
import React, {useCallback} from 'react';
import {SafeAreaView, View} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import ProductCard from '../../components/Product/ProductCard/ProductCard';
import {products} from '../../mockData/products.mock';
import {IProduct} from '../../models/product.model';
import {globalStyles} from '../../styles';
// =====================================================================

// Component
const FavoriteProductScreen = () => {
  // useCallbacks
  const renderProductCard = useCallback(({item}: {item: IProduct}) => {
    return <ProductCard product={item} />;
  }, []);
  // =====================================================================

  // Render
  return (
    <SafeAreaView style={globalStyles.flex}>
      <View style={globalStyles.container}>
        <FlatList
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

export default FavoriteProductScreen;
