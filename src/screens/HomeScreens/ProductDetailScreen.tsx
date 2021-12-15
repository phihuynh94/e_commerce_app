// Import
import {useNavigation} from '@react-navigation/core';
import React, {useCallback, useState} from 'react';
import {
  Alert,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';

// Interface & Type
const productImage = require('../../assets/images/ProductImage.png');
const starGold = require('../../assets/images/star.png');
const starClear = require('../../assets/images/starClear.png');
const profilePicture = require('../../assets/images/ProfilePicture.png');
const productPictureReview = require('../../assets/images/ProductPicture02.png');
// =====================================================================

// Component
const ProductDetailScreen = () => {
  // Hooks
  const navigation = useNavigation();

  // =====================================================================

  // useSelectors

  // =====================================================================

  // useState
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  // =====================================================================

  // useEffect

  // =====================================================================

  // useMemos

  // =====================================================================

  // =====================================================================

  //useCallBack
  const pressAddToCart = useCallback(() => {
    Alert.alert('Success', 'Product has beed added to cart');
  }, []);

  // Render
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollViewContainer}>
        <View>
          <Image source={productImage} style={styles.productImage} />

          <Text style={styles.header}>Nike Air Zoom Pegaus 36 Miami</Text>
        </View>
        <View style={styles.starContainer}>
          <Image style={styles.star} source={starGold} />
          <Image style={styles.star} source={starGold} />
          <Image style={styles.star} source={starGold} />
          <Image style={styles.star} source={starGold} />
          <Image style={styles.star} source={starClear} />
        </View>

        <View style={styles.sizeContainer}>
          <Text style={styles.label}>Select Size</Text>
          <ScrollView
            style={styles.sizeScrollView}
            horizontal={true}
            showsHorizontalScrollIndicator={false}>
            <TouchableOpacity style={styles.buttonSize}>
              <Text>6</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonSize}>
              <Text>6.5</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonSize}>
              <Text>7</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonSize}>
              <Text>7.5</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonSize}>
              <Text>8</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonSize}>
              <Text>8.5</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonSize}>
              <Text>9</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonSize}>
              <Text>9.5</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonSize}>
              <Text>10</Text>
            </TouchableOpacity>
          </ScrollView>
        </View>

        <View style={styles.colorContainer}>
          <Text style={styles.label}>Select Color</Text>
          <TouchableOpacity
            style={[
              styles.btnColor,
              {backgroundColor: '#00BFFF'},
            ]}></TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.btnColor,
              {backgroundColor: '#FF1493'},
            ]}></TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.btnColor,
              {backgroundColor: '#00CED1'},
            ]}></TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.btnColor,
              {backgroundColor: '#228B22'},
            ]}></TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.btnColor,
              {backgroundColor: '#20B2AA'},
            ]}></TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.btnColor,
              {backgroundColor: '#FF4500'},
            ]}></TouchableOpacity>
        </View>

        <View style={styles.specificationContainer}>
          <Text style={styles.label}>Specification</Text>
          <View style={styles.specRow}>
            <View style={styles.specLabel}>
              <Text>Shown:</Text>
            </View>
            <View style={styles.specInfo}>
              <Text>Laser</Text>
              <Text>Blue/Anthracite/Watermel</Text>
              <Text>on/White</Text>
            </View>
          </View>

          <Text>Style:</Text>
          <Text>CD0113-400</Text>
          <Text>
            The Nike Air Max 270 React ENG combines a full-length React foam
            midsole with a 270 Max Air unit for unrivaled comfort and a striking
            visual experience.
          </Text>
        </View>

        <View style={styles.reviewProduct}>
          <Text style={styles.label}>Review Product</Text>
          <Text>See More</Text>
          <View style={styles.starContainer}>
            <Image style={styles.star} source={starGold} />
            <Image style={styles.star} source={starGold} />
            <Image style={styles.star} source={starGold} />
            <Image style={styles.star} source={starGold} />
            <Image style={styles.star} source={starClear} />
          </View>

          <View style={styles.personInfo}>
            <Image source={profilePicture}></Image>
            <Text style={styles.label}>James Lawson</Text>
            <View style={styles.starContainer}>
              <Image style={styles.star} source={starGold} />
              <Image style={styles.star} source={starGold} />
              <Image style={styles.star} source={starGold} />
              <Image style={styles.star} source={starGold} />
              <Image style={styles.star} source={starClear} />
            </View>
          </View>

          <Text>
            air max are always very comfortable fit, clean and just perfect in
            every way. just the box was too small and scrunched the sneakers up
            a little bit, not sure if the box was always this small but the 90s
            are and will always be one of my favorites.
          </Text>
          <Image source={productPictureReview}></Image>
          <Text style={styles.date}>December 10, 2016</Text>
        </View>

        <View style={styles.suggestionContainer}>
          <Text style={styles.label}>You Might Also Like</Text>
        </View>

        <View style={styles.addToCarContainer}>
          <TouchableOpacity style={styles.shareButton} onPress={pressAddToCart}>
            <Text style={styles.shareButtonText}>Add To Cart</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ProductDetailScreen;

const styles = StyleSheet.create({
  addToCarContainer: {},
  btnColor: {
    height: 30,
    width: 30,
    borderRadius: 30,
    marginHorizontal: 3,
  },
  buttonSize: {
    height: 40,
    width: 40,
    borderRadius: 40,
    borderColor: '#778899',
    borderWidth: 1,
    marginHorizontal: 3,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  colorContainer: {
    flexDirection: 'row',
  },
  container: {
    padding: 15,
    alignItems: 'center',
    flex: 1,
  },
  date: {},
  header: {
    fontWeight: '500',
    fontSize: 16,
  },
  label: {
    fontWeight: '300',
    fontSize: 12,
  },
  personInfo: {},
  productImage: {},
  reviewProduct: {},
  scrollViewContainer: {
    flex: 1,
  },
  shareButton: {
    marginTop: 10,
    height: 45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
    backgroundColor: '#00BFFF',
  },
  shareButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
  },
  sizeContainer: {
    justifyContent: 'flex-start',
  },
  sizeScrollView: {},
  specificationContainer: {},
  specLabel: {
    flex: 1,
  },
  specInfo: {
    flex: 1,
    alignItems: 'flex-end',
  },
  specRow: {
    flexDirection: 'row',
  },
  star: {},
  starContainer: {
    flexDirection: 'row',
  },
  suggestionContainer: {},
});
