// Import
import React, {useCallback} from 'react';
import {SafeAreaView, View} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import ProductCard from '../../components/Product/ProductCard/ProductCard';
import {products} from '../../mockData/products-mock';
import {globalStyles} from '../../styles';

// Component
const FavoriteProductScreen = () => {
  // useCallbacks
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
          numColumns={2}
          pagingEnabled
          renderItem={renderProductCard}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </SafeAreaView>
  );
};

export default FavoriteProductScreen;
