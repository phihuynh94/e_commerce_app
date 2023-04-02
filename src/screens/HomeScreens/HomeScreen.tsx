// Import
import {useNavigation} from '@react-navigation/native';
import {useCallback, useEffect, useRef, useState} from 'react';
import {
  Dimensions,
  FlatList,
  Image,
  Keyboard,
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
  ViewToken,
} from 'react-native';
import {Badge} from 'react-native-paper';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {Divider, DotsIndicator, TextInput} from '../../common';
import ProductCard from '../../components/Product/ProductCard/ProductCard';
import {categories} from '../../mockData/categories.mock';
import {IBanner} from '../../models/banner.model';
import {IProduct} from '../../models/product.model';
import {fetchBanners} from '../../redux/banner/banner.action';
import {
  useBanners,
  useFetchBannersState,
} from '../../redux/banner/banner.selector';
import {useAppDispatch} from '../../redux/hooks';
import {fetchProducts} from '../../redux/product/product.action';
import {
  useFetchProductsState,
  useProducts,
} from '../../redux/product/product.selector';
import {ScreenNames} from '../../routes/routesHelpers';
import {globalStyles, staticValues} from '../../styles';
import {theme} from '../../styles/theme';
// =====================================================================

// Images
const offerBanner = require('../../assets/images/offer-banner.png');
const recomendedProductBanner = require('../../assets/images/recomended-product-banner.png');
// =====================================================================

// Component
const HomeScreen = () => {
  // Hooks
  const dispatch = useAppDispatch();
  const insets = useSafeAreaInsets();
  const navigation = useNavigation();
  // =====================================================================

  // useSelectors
  const banners = useBanners();

  const {fetchingBanners, fetchingBannersFail, fetchingBannersSuccess} =
    useFetchBannersState();

  const {fetchingProducts, fetchingProductsFail, fetchingProductsSuccess} =
    useFetchProductsState();

  const products = useProducts();
  // =====================================================================

  // useStates
  const [bannerIndex, setBannerIndex] = useState(0);
  const [search, setSearch] = useState('');
  const [scrolling, setScrolling] = useState(false);
  const [finishScrolling, setFinishScrolling] = useState(false);
  // =====================================================================

  // useRefs
  const bannerListRef = useRef<FlatList<IBanner>>(null);

  const onViewRef = useRef(({changed}: {changed: ViewToken[]}) => {
    setBannerIndex(changed[0].index || bannerIndex);
  });

  const viewConfigRef = useRef({viewAreaCoveragePercentThreshold: 50});
  // =====================================================================

  // useCallbacks
  const onBanner = useCallback(
    (banner: IBanner) => () => {
      navigation.navigate(ScreenNames.FlashSale, {
        title: banner.title,
        url: banner.url,
      });
    },
    [navigation],
  );

  const onFavoriteIcon = useCallback(() => {
    navigation.navigate(ScreenNames.FavoriteProducts);
  }, [navigation]);

  const onNotificationIcon = useCallback(() => {
    navigation.navigate(ScreenNames.Notification);
  }, [navigation]);

  // Render banner card
  const renderBannerCard = useCallback(
    ({item}: {item: IBanner}) => {
      return (
        <View style={styles.bannerContainer}>
          <Pressable onPress={onBanner(item)}>
            <Image source={offerBanner} />
          </Pressable>
        </View>
      );
    },
    [onBanner],
  );

  // Render product card
  const renderProductCard = useCallback(({item}: {item: IProduct}) => {
    return <ProductCard product={item} />;
  }, []);

  // Render on sale product card
  const renderSaleProductCard = useCallback(({item}: {item: IProduct}) => {
    return <ProductCard product={item} size="small" />;
  }, []);

  const setScrollingTrue = useCallback(() => {
    setScrolling(true);
  }, []);

  const setScrollingFalse = useCallback(() => {
    setFinishScrolling(true);
    setScrolling(false);
  }, []);
  // =====================================================================

  // useEffects
  // Auto-scrolling the carousel every 5 seconds
  useEffect(() => {
    const timeout = setTimeout(() => {
      // If user doesn't swipe the carousel or open the meal details, scroll every 5 seconds
      if (!scrolling && banners.length > 0) {
        if (!finishScrolling) {
          const newBannerIndex =
            bannerIndex + 1 === banners.length ? 0 : bannerIndex + 1;

          setBannerIndex(newBannerIndex);

          bannerListRef.current?.scrollToIndex({
            animated: true,
            index: newBannerIndex,
          });
        } else {
          setFinishScrolling(false);
        }
      }
    }, 5000);

    return () => {
      clearTimeout(timeout);
    };
  }, [finishScrolling, bannerIndex, scrolling, banners]);

  // Fetch Banners
  useEffect(() => {
    if (!fetchingBanners && !fetchingBannersFail && !fetchingBannersSuccess) {
      dispatch(fetchBanners());
    }
  }, [dispatch, fetchingBanners, fetchingBannersFail, fetchingBannersSuccess]);

  // Fetch Products
  useEffect(() => {
    if (
      !fetchingProducts &&
      !fetchingProductsFail &&
      !fetchingProductsSuccess
    ) {
      dispatch(fetchProducts());
    }
  }, [
    dispatch,
    fetchingProducts,
    fetchingProductsFail,
    fetchingProductsSuccess,
  ]);
  // =====================================================================

  // Render
  return (
    <SafeAreaView style={globalStyles.flex}>
      <Pressable onPress={Keyboard.dismiss}>
        {/* Search text input & icons in header */}
        <View style={styles.headerContainer}>
          {/* Search text input */}
          <View style={styles.searchInput}>
            <TextInput
              icon="text-search"
              onChangeText={setSearch}
              placeholder="Search Product"
              value={search}
            />
          </View>

          {/* Favorite icon */}
          <Pressable onPress={onFavoriteIcon} style={styles.icon}>
            <Icon
              color={theme.colors.primaryGray}
              name="heart-outline"
              size={staticValues.iconSize}
            />
          </Pressable>

          {/* Notification icon */}
          <Pressable onPress={onNotificationIcon} style={styles.icon}>
            <Badge size={10} style={styles.badge}>
              2
            </Badge>
            <Icon
              color={theme.colors.primaryGray}
              name="bell-outline"
              size={staticValues.iconSize}
            />
          </Pressable>
        </View>
      </Pressable>

      {/* Divider */}
      <Divider />

      <ScrollView
        showsVerticalScrollIndicator={false}
        style={globalStyles.container}>
        <View style={{paddingBottom: insets.bottom}}>
          {/* Offer banner list */}
          {fetchingBannersSuccess && banners.length > 0 && (
            <>
              <FlatList
                data={banners}
                horizontal
                initialScrollIndex={bannerIndex}
                onScrollBeginDrag={setScrollingTrue}
                onScrollEndDrag={setScrollingFalse}
                onViewableItemsChanged={onViewRef.current}
                pagingEnabled
                ref={bannerListRef}
                renderItem={renderBannerCard}
                scrollEventThrottle={200}
                showsHorizontalScrollIndicator={false}
                viewabilityConfig={viewConfigRef.current}
              />

              <View style={styles.dotIndicatorContainer}>
                <DotsIndicator array={banners} index={bannerIndex} />
              </View>
            </>
          )}

          {/* Caterory list */}
          <View style={styles.sectionHeaderContainer}>
            <Text style={styles.sectionHeader}>Category</Text>
            <Text style={globalStyles.linkText}>See More</Text>
          </View>

          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            {categories.map((_, index) => (
              <View key={index} style={styles.cateroryContainer}>
                <View style={styles.cateroryIconContainer}>
                  <Icon
                    color={theme.colors.primaryBlue}
                    name="tshirt-crew-outline"
                    size={staticValues.iconSize}
                  />
                </View>
                <Text style={styles.cateroryLabel}>Man Shirt</Text>
              </View>
            ))}
          </ScrollView>

          {fetchingProductsSuccess && (
            <>
              {/* Mega sale list */}
              <View style={styles.sectionHeaderContainer}>
                <Text style={styles.sectionHeader}>Mega Sale</Text>
                <Text style={globalStyles.linkText}>See More</Text>
              </View>

              <FlatList
                data={products}
                horizontal
                pagingEnabled
                renderItem={renderSaleProductCard}
                showsHorizontalScrollIndicator={false}
              />

              {/* Product list */}
              <View style={styles.sectionHeaderContainer}>
                <Text style={styles.sectionHeader}>Explore Products</Text>
                <Text style={globalStyles.linkText}>See More</Text>
              </View>

              <FlatList
                data={products}
                horizontal
                pagingEnabled
                renderItem={renderSaleProductCard}
                showsHorizontalScrollIndicator={false}
              />
            </>
          )}

          <View style={styles.bannerContainer}>
            <Image source={recomendedProductBanner} />
          </View>

          {fetchingProductsSuccess && (
            <FlatList
              data={products}
              horizontal
              pagingEnabled
              renderItem={renderProductCard}
              showsHorizontalScrollIndicator={false}
            />
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
// =====================================================================

// Styles
const styles = StyleSheet.create({
  badge: {
    position: 'absolute',
    right: 3,
    top: 4,
    zIndex: 1,
  },
  bannerContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 10,
    marginVertical: 10,
    width: Dimensions.get('screen').width - 50,
  },
  cateroryContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 15,
  },
  cateroryIconContainer: {
    alignItems: 'center',
    borderColor: theme.colors.secondaryGray,
    borderRadius: 35,
    borderWidth: 2,
    height: 70,
    justifyContent: 'center',
    marginBottom: 5,
    width: 70,
  },
  cateroryLabel: {
    color: theme.colors.primaryGray,
    fontWeight: '400',
    fontSize: 10,
    lineHeight: 15,
  },
  dotIndicatorContainer: {
    marginTop: 15,
  },
  headerContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    marginBottom: 10,
    paddingHorizontal: staticValues.padding,
  },
  icon: {
    flex: 1,
    alignItems: 'flex-end',
  },
  searchInput: {
    flex: 8,
  },
  sectionHeader: {
    ...theme.typography.h5,
  },
  sectionHeaderContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 25,
    marginBottom: 15,
  },
});
// =====================================================================

export default HomeScreen;
