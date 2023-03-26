// Imports
import React, {useCallback, useState} from 'react';
import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import FeatherIcon from 'react-native-vector-icons/Feather';
import MCIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import {products} from '../../../mockData/products.mock';
import {staticValues} from '../../../styles';
import {theme} from '../../../styles/theme';
// =====================================================================

// Interface
interface ICartCard {
  inOrderDetails?: boolean;
}
// =====================================================================

// Component
const CartCard = ({inOrderDetails}: ICartCard) => {
  // useStates
  const [isFavorite, setIsFavorite] = useState(false);
  const [quantity, setQuantity] = useState(0);
  // =====================================================================

  // useCallbacks
  const onFavoriteIcon = useCallback(() => {
    setIsFavorite(!isFavorite);
  }, [isFavorite]);

  const onMinus = useCallback(() => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    }
  }, [quantity]);

  const onPlus = useCallback(() => {
    setQuantity(quantity + 1);
  }, [quantity]);

  const onTrashIcon = useCallback(() => {}, []);
  // =====================================================================

  // Render
  return (
    <View style={styles.card}>
      {/* Product image */}
      <Image
        source={require('../../../assets/images/default-image.png')}
        style={styles.image}
      />

      <View style={styles.column}>
        <View style={styles.topRow}>
          {/* Product title */}
          <View style={styles.title}>
            <Text style={theme.typography.h5}>{products[0].title}</Text>
          </View>

          {/* Favorite icon */}
          <Pressable onPress={onFavoriteIcon} style={styles.icon}>
            {!isFavorite && (
              <MCIcon
                color={theme.colors.primaryGray}
                name="heart-outline"
                size={staticValues.iconSize}
              />
            )}

            {isFavorite && (
              <MCIcon
                color={theme.colors.primaryRed}
                name="heart"
                size={staticValues.iconSize}
              />
            )}
          </Pressable>

          {/* Trash icon */}
          {!inOrderDetails ? (
            <Pressable onPress={onTrashIcon} style={styles.icon}>
              <FeatherIcon
                color={theme.colors.primaryGray}
                name="trash"
                size={staticValues.iconSize}
              />
            </Pressable>
          ) : null}
        </View>

        <View style={styles.bottomRow}>
          {/* Price */}
          <Text style={styles.price}>${products[0].price}</Text>

          {/* Minus icon */}
          {!inOrderDetails ? (
            <View style={styles.quantity}>
              <FeatherIcon
                color={theme.colors.primaryGray}
                name="minus"
                onPress={onMinus}
                size={staticValues.iconSize}
                style={styles.quantityIcon}
              />

              {/* Quantity */}
              <View style={styles.quantityText}>
                <Text>{quantity}</Text>
              </View>

              {/* Plus icon */}
              <FeatherIcon
                color={theme.colors.primaryGray}
                name="plus"
                onPress={onPlus}
                size={staticValues.iconSize}
                style={styles.quantityIcon}
              />
            </View>
          ) : null}
        </View>
      </View>
    </View>
  );
};
// =====================================================================

// Styles
const styles = StyleSheet.create({
  bottomRow: {
    alignItems: 'flex-end',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  card: {
    borderColor: theme.colors.secondaryGray,
    borderRadius: 10,
    borderWidth: 1,
    flexDirection: 'row',
    marginBottom: 16,
    padding: 16,
  },
  column: {
    flex: 1,
  },
  icon: {
    marginLeft: 6,
  },
  image: {
    height: 80,
    marginRight: 20,
    width: 80,
  },
  price: {
    ...theme.typography.h4,
    color: theme.colors.primaryBlue,
  },
  quantity: {
    alignItems: 'center',
    borderColor: theme.colors.secondaryGray,
    borderRadius: 5,
    borderWidth: 1,
    flexDirection: 'row',
    height: 30,
    width: 120,
  },
  quantityIcon: {
    flex: 1,
    textAlign: 'center',
  },
  quantityText: {
    alignItems: 'center',
    backgroundColor: theme.colors.secondaryBlue,
    borderColor: theme.colors.secondaryBlue,
    borderWidth: 0.5,
    flex: 1,
    height: 30,
    justifyContent: 'center',
  },
  title: {
    flex: 1,
  },
  topRow: {
    flexDirection: 'row',
  },
});
// =====================================================================

export default CartCard;
