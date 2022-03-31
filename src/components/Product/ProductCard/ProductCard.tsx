// Import
import {useNavigation} from '@react-navigation/native';
import React, {useCallback, useMemo} from 'react';
import {
  Image,
  Pressable,
  StyleProp,
  StyleSheet,
  View,
  ViewStyle,
} from 'react-native';
import {Card, Surface, Text} from 'react-native-paper';
import RatingStars from '../../../common/RatingStars/RatingStars';
import {IProduct} from '../../../models/product-model';
import {ScreenNames} from '../../../routes/routesHelpers';
import {globalStyles, staticValues} from '../../../styles';
import {theme} from '../../../styles/theme';

// Interfaces & Types
interface IProductCardProps {
  product: IProduct;
  isSmallCard?: boolean;
}
// =====================================================================

// Component
const ProductCard = ({product, isSmallCard}: IProductCardProps) => {
  // Hooks
  const navigation = useNavigation();
  // =====================================================================

  // useMemos
  const cardStyle: StyleProp<ViewStyle> = useMemo(() => {
    if (isSmallCard) {
      return {
        ...styles.card,
        width: 140,
      };
    }

    return styles.card;
  }, [isSmallCard]);
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
            <Surface style={styles.surface}>
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
    height: 240,
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
    backgroundColor: theme.colors.background,
    elevation: 9,
    height: 110,
    justifyContent: 'center',
    width: 110,
  },
  title: {
    color: theme.colors.dark,
    fontSize: staticValues.smallFont,
    fontWeight: '700',
    lineHeight: 18,
    marginTop: 15,
    marginBottom: 5,
  },
});
