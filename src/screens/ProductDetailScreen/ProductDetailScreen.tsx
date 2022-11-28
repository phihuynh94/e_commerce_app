// Import
import {RouteProp, useNavigation, useRoute} from '@react-navigation/native';
import React, {useCallback, useState} from 'react';
import {
  Dimensions,
  FlatList,
  Image,
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {AppStackParamList} from '../../../App';
import {Button, RatingStars} from '../../common';
import ProductCard from '../../components/Product/ProductCard/ProductCard';
import ReviewCard from '../../components/Review/ReviewCard/ReviewCard';
import {products} from '../../mockData/products-mock';
import {reviews} from '../../mockData/reviews-mock';
import {ScreenNames} from '../../routes/routesHelpers';
import {globalStyles, staticValues} from '../../styles';
import {theme} from '../../styles/theme';
// =====================================================================

// Constants
const colors = [
  '#00BFFF',
  '#FF1493',
  '#00CED1',
  '#228B22',
  '#20B2AA',
  '#FF4500',
];

const sizes = [6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11];
// =====================================================================

// Interfaces & Types
type RoutePropType = RouteProp<AppStackParamList, 'ProductDetail'>;
// =====================================================================

// Component
const ProductDetailScreen = () => {
  // Hooks
  const navigation = useNavigation();

  const route = useRoute<RoutePropType>();

  const {product} = route.params;
  // =====================================================================

  // useState
  const [isFavorite, setIsFavorite] = useState(false);
  const [selectedColor, setSelectedColor] = useState('');
  const [selectedSize, setSelectedSize] = useState(-1);
  // =====================================================================

  // useCallbacks
  const onAddToCart = useCallback(() => {}, []);

  const onColorButton = useCallback(
    (color: string) => () => {
      setSelectedColor(color);
    },
    [],
  );

  const onFavoriteIcon = useCallback(() => {
    setIsFavorite(!isFavorite);
  }, [isFavorite]);

  const onReview = useCallback(() => {
    navigation.navigate(ScreenNames.ReviewProduct);
  }, [navigation]);

  const onSizeButton = useCallback(
    (size: number) => () => {
      setSelectedSize(size);
    },
    [],
  );

  const onWriteReview = useCallback(() => {
    navigation.navigate(ScreenNames.WriteReview);
  }, [navigation]);

  const selectedColorStyle = useCallback(
    (color: string) => {
      if (color === selectedColor) {
        return {
          ...styles.colorButton,
          borderColor: color,
          borderWidth: 15,
        };
      }

      return {
        ...styles.colorButton,
        backgroundColor: color,
      };
    },
    [selectedColor],
  );

  const selectedSizeStyle = useCallback(
    (size: number) => {
      if (size === selectedSize) {
        return {
          ...styles.sizeButton,
          borderColor: theme.colors.primaryBlue,
        };
      }

      return styles.sizeButton;
    },
    [selectedSize],
  );

  const renderColorButton = useCallback(
    ({item}) => {
      return (
        <Pressable
          onPress={onColorButton(item)}
          style={selectedColorStyle(item)}
        />
      );
    },
    [onColorButton, selectedColorStyle],
  );

  const renderProductCard = useCallback(({item}) => {
    return <ProductCard product={item} />;
  }, []);

  const renderSizeButton = useCallback(
    ({item}) => {
      return (
        <Pressable onPress={onSizeButton(item)} style={selectedSizeStyle(item)}>
          <Text>{item}</Text>
        </Pressable>
      );
    },
    [onSizeButton, selectedSizeStyle],
  );
  // =====================================================================

  // Render
  return (
    <SafeAreaView style={globalStyles.flex}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Image */}
        <Image source={{uri: product.image}} style={styles.image} />

        <View style={globalStyles.container}>
          {/* Title container */}
          <View style={styles.titleContainer}>
            {/* Title */}
            <Text style={styles.title}>{product.title}</Text>

            {/* Favorite icon */}
            <Pressable onPress={onFavoriteIcon} style={styles.icon}>
              {!isFavorite ? (
                <Icon
                  color={theme.colors.primaryGray}
                  name="heart-outline"
                  size={staticValues.iconSize}
                />
              ) : (
                <Icon
                  color={theme.colors.primaryYellow}
                  name="heart"
                  size={staticValues.iconSize}
                />
              )}
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

          {/* Add to cart button */}
          <View style={styles.button}>
            <Button onPress={onAddToCart}>Add To Cart</Button>
          </View>

          {/* Review section */}
          <View style={styles.reviewRow}>
            <Text style={styles.sectionHeader}>Review Product</Text>
            <Text onPress={onReview} style={styles.linkText}>
              See More
            </Text>
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
          <ReviewCard review={reviews[0]} />
          <Button onPress={onWriteReview}>Write Review</Button>

          {/* You might also like section */}
          <Text style={styles.sectionHeader}>You Might Also Like</Text>
          <FlatList
            data={products}
            horizontal
            pagingEnabled
            renderItem={renderProductCard}
            showsHorizontalScrollIndicator={false}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
// =====================================================================

// Styles
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
    marginVertical: 15,
  },
  price: {
    color: theme.colors.primaryBlue,
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
    ...theme.typography.h5,
    marginVertical: 15,
  },
  sizeButton: {
    alignItems: 'center',
    borderColor: theme.colors.secondaryGray,
    borderRadius: 25,
    borderWidth: 2,
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
// =====================================================================

export default ProductDetailScreen;
