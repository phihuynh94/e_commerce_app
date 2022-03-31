// Import
import {RouteProp, useRoute} from '@react-navigation/native';
import React, {useCallback} from 'react';
import {
  Dimensions,
  Image,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {FlatList, ScrollView} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {Button} from '../../common';
import RatingStars from '../../common/RatingStars/RatingStars';
import ProductCard from '../../components/Product/ProductCard/ProductCard';
import ReviewCard from '../../components/Review/ReviewCard/ReviewCard';
import {products} from '../../mockData/products-mock';
import {HomeStackParamList} from '../../routes/HomeRoutes';
import {globalStyles, staticValues} from '../../styles';
import {theme} from '../../styles/theme';

const colors = [
  '#00BFFF',
  '#FF1493',
  '#00CED1',
  '#228B22',
  '#20B2AA',
  '#FF4500',
];

const sizes = [6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11];

// Interfaces & Types
type RoutePropType = RouteProp<HomeStackParamList, 'ProductDetail'>;
// =====================================================================

// Component
const ProductDetailScreen = () => {
  // Hooks
  const route = useRoute<RoutePropType>();

  const {product} = route.params;
  // =====================================================================

  // useSelectors

  // =====================================================================

  // useState

  // =====================================================================

  // useEffect

  // =====================================================================

  // useMemos

  // =====================================================================

  // useCallbacks
  const onAddToCart = useCallback(() => {}, []);

  const onColorButton = useCallback(() => {}, []);

  const onFavoriteIcon = useCallback(() => {}, []);

  const onSizeButton = useCallback(() => {}, []);

  const renderColorButton = useCallback(({item}) => {
    return (
      <Pressable
        onPress={onColorButton}
        style={[styles.colorButton, {backgroundColor: item}]}
      />
    );
  }, []);

  const renderProductCard = useCallback(({item}) => {
    return <ProductCard product={item} />;
  }, []);

  const renderSizeButton = useCallback(({item}) => {
    return (
      <Pressable onPress={onSizeButton} style={styles.sizeButton}>
        <Text>{item}</Text>
      </Pressable>
    );
  }, []);
  // =====================================================================

  // Render
  return (
    <SafeAreaView style={globalStyles.container}>
      <ScrollView>
        {/* Image */}
        <Image source={{uri: product.image}} style={styles.image} />

        <View style={globalStyles.container}>
          {/* Title container */}
          <View style={styles.titleContainer}>
            {/* Title */}
            <Text style={styles.title}>{product.title}</Text>

            {/* Favorite icon */}
            <Pressable onPress={onFavoriteIcon} style={styles.icon}>
              <Icon
                color={theme.colors.text}
                name="heart-outline"
                size={staticValues.iconSize}
              />
            </Pressable>
          </View>

          {/* Rating stars */}
          <RatingStars rating={product.rating.rate} />

          {/* Price */}
          <Text style={styles.price}>${product.price}</Text>

          {/* Select size section */}
          <Text style={styles.sectionHeader}>Select Size</Text>
          <FlatList
            data={sizes}
            horizontal
            pagingEnabled
            renderItem={renderSizeButton}
            showsHorizontalScrollIndicator={false}
          />

          {/* Select color section */}
          <Text style={styles.sectionHeader}>Select Color</Text>
          <FlatList
            data={colors}
            horizontal
            pagingEnabled
            renderItem={renderColorButton}
            showsHorizontalScrollIndicator={false}
          />

          {/* Description section */}
          <Text style={styles.sectionHeader}>Description</Text>
          <Text>{product.description}</Text>

          {/* Review section */}
          <View style={styles.reviewRow}>
            <Text style={styles.sectionHeader}>Review Product</Text>
            <Text style={styles.linkText}>See More</Text>
          </View>
          <View style={styles.ratingRow}>
            {/* Rating stars */}
            <RatingStars rating={product.rating.rate} />
            {/* Rating rate and eviews count */}
            <Text>
              {' '}
              {product.rating.rate} ({product.rating.count} reviews)
            </Text>
          </View>
          {/* User review */}
          <ReviewCard />

          {/* You might also like section */}
          <Text style={styles.sectionHeader}>You Might Also Like</Text>
          <FlatList
            data={products}
            horizontal
            pagingEnabled
            renderItem={renderProductCard}
            showsHorizontalScrollIndicator={false}
          />

          {/* Add to cart button */}
          <View style={styles.button}>
            <Button onPress={onAddToCart}>Add To Cart</Button>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ProductDetailScreen;

const styles = StyleSheet.create({
  button: {
    marginVertical: 10,
  },
  colorButton: {
    borderRadius: 25,
    height: 50,
    marginRight: 10,
    width: 50,
  },
  icon: {
    flex: 1,
  },
  image: {
    height: 300,
    width: Dimensions.get('screen').width,
  },
  linkText: {
    ...globalStyles.linkText,
    fontSize: staticValues.normalFont,
    marginVertical: 15,
  },
  price: {
    color: theme.colors.primary,
    fontWeight: '700',
    fontSize: 20,
    lineHeight: 30,
    marginTop: 10,
  },
  ratingRow: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  reviewRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  sectionHeader: {
    fontWeight: '700',
    fontSize: staticValues.normalFont,
    lineHeight: staticValues.lineHeight,
    marginVertical: 15,
  },
  sizeButton: {
    alignItems: 'center',
    borderColor: theme.colors.border,
    borderRadius: 25,
    borderWidth: 1,
    height: 50,
    justifyContent: 'center',
    marginRight: 10,
    width: 50,
  },
  title: {
    flex: 9,
    fontWeight: '700',
    fontSize: 25,
    paddingRight: 30,
  },
  titleContainer: {
    alignItems: 'flex-start',
    flex: 1,
    flexDirection: 'row',
    marginBottom: 10,
  },
});
