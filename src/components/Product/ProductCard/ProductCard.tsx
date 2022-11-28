// Import
import {useNavigation} from '@react-navigation/native';
import React, {useCallback, useMemo} from 'react';
import {
  Image,
  Pressable,
  StyleSheet,
  Text,
  View,
  ViewStyle,
} from 'react-native';
import {Card, Surface} from 'react-native-paper';
import {RatingStars} from '../../../common';
import {IProduct} from '../../../models/product-model';
import {ScreenNames} from '../../../routes/routesHelpers';
import {globalStyles} from '../../../styles';
import {theme} from '../../../styles/theme';

// Interfaces & Types
interface IProductCardProps {
  product: IProduct;
  size?: 'small' | 'normal';
}
// =====================================================================

// Component
const ProductCard = ({product, size}: IProductCardProps) => {
  // Hooks
  const navigation = useNavigation();
  // =====================================================================

  // useMemos
  const cardStyle: ViewStyle = useMemo(() => {
    if (size === 'small') {
      return {
        ...styles.card,
        height: 240,
        width: 140,
      };
    }

    return styles.card;
  }, [size]);

  const surfaceStyle: ViewStyle = useMemo(() => {
    if (size === 'small') {
      return {
        ...styles.surface,
        height: 110,
        width: 110,
      };
    }

    return styles.surface;
  }, [size]);
  // =====================================================================

  // useCallbacks
  const onPress = useCallback(() => {
    navigation.navigate(ScreenNames.ProductDetail, {
      product,
      title: product.title,
    });
  }, [navigation, product]);
  // =====================================================================

  // Render
  return (
    <Pressable onPress={onPress}>
      <Card style={cardStyle}>
        <Card.Content>
          {/* Image */}
          <View style={styles.imageContainer}>
            <Surface style={surfaceStyle}>
              <Image
                source={{
                  uri: product.image,
                }}
                style={styles.image}
              />
            </Surface>
          </View>

          {/* Title */}
          <Text numberOfLines={2} style={styles.title}>
            {product.title}
          </Text>

          {/* Rating stars */}
          {<RatingStars rating={product.rating.rate} />}

          {/* Price */}
          <View style={styles.price}>
            <Text style={globalStyles.linkText}>${product.price}</Text>
          </View>
        </Card.Content>
      </Card>
    </Pressable>
  );
};

export default ProductCard;

const styles = StyleSheet.create({
  card: {
    alignItems: 'center',
    height: 280,
    justifyContent: 'center',
    margin: 5,
    width: 170,
  },
  image: {
    height: 110,
    width: 110,
  },
  imageContainer: {
    alignItems: 'center',
  },
  price: {
    marginTop: 10,
  },
  surface: {
    alignItems: 'center',
    borderRadius: 5,
    elevation: 9,
    height: 140,
    justifyContent: 'center',
    width: 140,
  },
  title: {
    ...theme.typography.h6,
    color: theme.colors.primaryBlack,
    lineHeight: 18,
    marginTop: 15,
    marginBottom: 5,
  },
});
