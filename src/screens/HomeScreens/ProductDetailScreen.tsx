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
const suggestionProduct = require('../../assets/images/imageProduct.png');
const suggestionProduct2 = require('../../assets/images/imageProduct2.png');
const suggestionProduct3 = require('../../assets/images/imageProduct3.png');
// =====================================================================

const colors = [
  '#00BFFF',
  '#FF1493',
  '#00CED1',
  '#228B22',
  '#20B2AA',
  '#FF4500',
];
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
        <View style={styles.productInfoContainer}>
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

        <View style={styles.sizeContainer}>
          <Text style={styles.label}>Select Color</Text>
          <ScrollView
            style={styles.sizeScrollView}
            horizontal={true}
            showsHorizontalScrollIndicator={false}>
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
          </ScrollView>
        </View>

        <View style={styles.sizeContainer}>
          <Text style={styles.label}>Specification</Text>
          <View style={styles.specRow}>
            <View style={styles.specLabel}>
              <Text>Shown:</Text>
            </View>
            <View style={styles.specInfo}>
              <Text style={styles.info}>Laser</Text>
              <Text style={styles.info}>Blue/Anthracite/Watermel</Text>
              <Text style={styles.info}>on/White</Text>
            </View>
          </View>

          <View style={styles.specRow}>
            <View style={styles.specLabel}>
              <Text style={styles.info}>Style:</Text>
            </View>
            <View style={styles.specInfo}>
              <Text style={styles.info}>CD0113-400</Text>
            </View>
          </View>

          <Text style={styles.info}>
            The Nike Air Max 270 React ENG combines a full-length React foam
            midsole with a 270 Max Air unit for unrivaled comfort and a striking
            visual experience.
          </Text>
        </View>

        <View style={styles.sizeContainer}>
          <View style={styles.reviewProductLabel}>
            <View>
              <Text style={styles.label}>Review Product</Text>
            </View>
            <View style={styles.specInfo}>
              <Text style={styles.seeMore}>See More</Text>
            </View>
          </View>

          <View style={styles.starContainer}>
            <Image style={styles.star} source={starGold} />
            <Image style={styles.star} source={starGold} />
            <Image style={styles.star} source={starGold} />
            <Image style={styles.star} source={starGold} />
            <Image style={styles.star} source={starClear} />
            <Text> 4.5 (5 Reviews)</Text>
          </View>

          <View style={styles.personInfo}>
            <View style={styles.reviewProductLabel}>
              <Image source={profilePicture} />
              <View style={styles.personReview}>
                <Text style={styles.label}>James Lawson</Text>
                <View style={styles.starContainer}>
                  <Image style={styles.star} source={starGold} />
                  <Image style={styles.star} source={starGold} />
                  <Image style={styles.star} source={starGold} />
                  <Image style={styles.star} source={starGold} />
                  <Image style={styles.star} source={starClear} />
                </View>
              </View>
            </View>
          </View>

          <Text style={styles.reviewParagraph}>
            air max are always very comfortable fit, clean and just perfect in
            every way. just the box was too small and scrunched the sneakers up
            a little bit, not sure if the box was always this small but the 90s
            are and will always be one of my favorites.
          </Text>
          <ScrollView
            style={styles.sizeScrollView}
            horizontal={true}
            showsHorizontalScrollIndicator={false}>
            <Image
              style={styles.reviewProductImage}
              source={productPictureReview}
            />
            <Image
              style={styles.reviewProductImage}
              source={productPictureReview}
            />
          </ScrollView>

          <Text style={styles.date}>December 10, 2016</Text>
        </View>

        <View style={styles.sizeContainer}>
          <Text style={styles.label}>You Might Also Like</Text>

          <ScrollView
            style={styles.sizeScrollView}
            horizontal={true}
            showsHorizontalScrollIndicator={false}>
            {/* card view */}
            <View style={styles.suggestionProduct}>
              <Image
                style={styles.reviewProductImage}
                source={suggestionProduct}
              />
              <View style={styles.suggestionProductDetail}>
                <Text style={styles.label}>FS-Nike Air Max 270 React</Text>
                <Text style={styles.productPrice}>$299,43</Text>
                <View style={styles.reviewProductLabel}>
                  <Text style={styles.productOldPrice}>$534,33</Text>
                  <Text style={styles.productPercentOff}>24% Off</Text>
                </View>
              </View>
            </View>

            <View style={styles.suggestionProduct}>
              <Image
                style={styles.reviewProductImage}
                source={suggestionProduct2}
              />
              <View style={styles.suggestionProductDetail}>
                <Text style={styles.label}>FS - QUILTED MAXI CROS...</Text>
                <Text style={styles.productPrice}>$299,43</Text>
                <View style={styles.reviewProductLabel}>
                  <Text style={styles.productOldPrice}>$534,33</Text>
                  <Text style={styles.productPercentOff}>24% Off</Text>
                </View>
              </View>
            </View>
            <View style={styles.suggestionProduct}>
              <Image
                style={styles.reviewProductImage}
                source={suggestionProduct2}
              />
              <View style={styles.suggestionProductDetail}>
                <Text style={styles.label}>FS - NIKE JORDAN</Text>
                <Text style={styles.productPrice}>$299,43</Text>
                <View style={styles.reviewProductLabel}>
                  <Text style={styles.productOldPrice}>$534,33</Text>
                  <Text style={styles.productPercentOff}>24% Off</Text>
                </View>
              </View>
            </View>
          </ScrollView>
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
    height: 60,
    width: 60,
    borderRadius: 60,
    marginHorizontal: 3,
  },
  buttonSize: {
    height: 60,
    width: 60,
    borderRadius: 60,
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
    fontWeight: 'bold',
    fontSize: 20,
    paddingLeft: 5,
    paddingTop: 20,
  },
  info: {
    lineHeight: 20,
    paddingBottom: 3,
  },
  label: {
    fontWeight: 'bold',
    fontSize: 16,
    paddingBottom: 10,
  },
  personInfo: {},
  personReview: {
    paddingLeft: 5,
  },
  productImage: {},
  productInfoContainer: {
    marginTop: 5,
    marginBottom: 20,
  },
  productOldPrice: {
    paddingRight: 8,
    color: '#9098B1',
    textDecorationLine: 'line-through',
  },
  reviewParagraph: {
    paddingBottom: 5,
    lineHeight: 20,
  },
  productPercentOff: {
    color: '#FB7181',
    fontWeight: 'bold',
  },
  productPrice: {
    color: '#40BFFF',
    fontWeight: 'bold',
    alignItems: 'flex-start',
    paddingBottom: 10,
  },
  reviewProduct: {},
  reviewProductImage: {
    marginRight: 10,
    marginBottom: 10,
    marginLeft: 10,
  },
  reviewProductLabel: {
    flexDirection: 'row',
  },
  scrollViewContainer: {
    flex: 1,
  },
  seeMore: {
    color: '#40BFFF',
    fontSize: 16,
    fontWeight: 'bold',
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
    marginLeft: 5,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    marginBottom: 20,
  },
  sizeScrollView: {},
  specificationContainer: {},
  specLabel: {
    flex: 1,
  },
  specInfo: {
    flex: 1,
    alignItems: 'flex-end',
    paddingRight: 5,
  },
  specRow: {
    flexDirection: 'row',
    paddingBottom: 10,
  },
  star: {
    marginLeft: 5,
  },
  starContainer: {
    flexDirection: 'row',
    paddingBottom: 20,
  },
  suggestionContainer: {},
  suggestionProduct: {
    backgroundColor: '#FFFFFF',
    height: 268,
    width: 151,
    borderRadius: 15,
    borderColor: '#40BFFF',
    alignItems: 'center',
    borderWidth: 1,
    flexDirection: 'column',
    paddingTop: 20,
    paddingBottom: 20,
    paddingLeft: 10,
    paddingRight: 10,
    marginRight: 10,
  },
  suggestionProductDetail: {
    flexDirection: 'column',
  },
});
