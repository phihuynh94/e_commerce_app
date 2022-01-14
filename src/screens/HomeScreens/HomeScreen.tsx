// Import
import React, {useCallback, useEffect, useRef, useState} from 'react';
import {
  Dimensions,
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
  ViewToken,
} from 'react-native';
import {Badge} from 'react-native-paper';
import {SafeAreaView} from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {TextInput} from '../../common';
import DotsIndicator from '../../common/DotsIndicator/DotsIndicator';
import {banners, categories} from '../../mockData';
import {globalStyles, staticValues} from '../../styles';
import {theme} from '../../styles/theme';
import {IBanner} from '../../types';

// Images
const offerBanner = require('../../assets/images/offer-banner.png');
const recomendedProductBanner = require('../../assets/images/recomended-product-banner.png');
// =====================================================================

// Interface & Type

// Component
const HomeScreen = () => {
  // Hooks

  // =====================================================================

  // useSelectors

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

  // useMemos

  // =====================================================================

  // useCallbacks
  const renderCard = useCallback(({banner}) => {
    return (
      <View style={styles.bannerContainer}>
        <Image source={offerBanner} />
      </View>
    );
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
      if (!scrolling) {
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
  }, [finishScrolling, bannerIndex, banners.length, scrolling]);
  // =====================================================================

  // Render
  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.container}>
          {/* Search text input & icons in header */}
          <View style={styles.headerContainer}>
            {/* Search text input */}
            <View style={styles.searchInput}>
              <TextInput
                autoComplete="off"
                icon="text-search"
                onChangeText={setSearch}
                placeholder="Search Product"
                value={search}
              />
            </View>

            {/* Favorite icon */}
            <View style={styles.icon}>
              <Icon color={theme.colors.text} name="heart-outline" size={30} />
            </View>

            {/* Notification icon */}
            <View style={styles.icon}>
              <Badge style={styles.badge} size={10}>
                2
              </Badge>
              <Icon color={theme.colors.text} name="bell-outline" size={30} />
            </View>
          </View>
        </View>

        {/* Divider */}
        <View style={globalStyles.dividerContainer}>
          <View style={globalStyles.divider} />
        </View>

        <View style={styles.container}>
          {/* Offer banner list */}
          <FlatList
            ref={bannerListRef}
            data={banners}
            horizontal
            initialScrollIndex={bannerIndex}
            // keyExtractor={keyExtractor}
            onScrollBeginDrag={setScrollingTrue}
            onScrollEndDrag={setScrollingFalse}
            // onScrollToIndexFailed={noop}
            onViewableItemsChanged={onViewRef.current}
            pagingEnabled
            renderItem={renderCard}
            scrollEventThrottle={200}
            showsHorizontalScrollIndicator={false}
            viewabilityConfig={viewConfigRef.current}
          />

          <View style={styles.dotIndicatorContainer}>
            <DotsIndicator array={banners} index={bannerIndex} />
          </View>

          {/* Caterory list */}
          <View style={styles.sectionHeaderContainer}>
            <Text style={styles.sectionHeader}>Category</Text>
            <Text style={styles.linkText}>See More</Text>
          </View>

          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            {categories.map((_, index) => (
              <View key={index} style={styles.cateroryContainer}>
                <View style={styles.cateroryIconContainer}>
                  <Icon
                    color={theme.colors.primary}
                    name="tshirt-crew-outline"
                    size={30}
                  />
                </View>
                <Text style={styles.cateroryLabel}>Man Shirt</Text>
              </View>
            ))}
          </ScrollView>

          {/*Flash sale list */}
          <View style={styles.sectionHeaderContainer}>
            <Text style={styles.sectionHeader}>Flash Sale</Text>
            <Text style={styles.linkText}>See More</Text>
          </View>

          {/* Mega sale list */}
          <View style={styles.sectionHeaderContainer}>
            <Text style={styles.sectionHeader}>Mega Sale</Text>
            <Text style={styles.linkText}>See More</Text>
          </View>

          <View style={styles.bannerContainer}>
            <Image source={recomendedProductBanner} />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;

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
    width: Dimensions.get('window').width - 50,
  },
  cateroryContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 15,
  },
  cateroryIconContainer: {
    alignItems: 'center',
    borderColor: theme.colors.accent,
    borderRadius: 35,
    borderWidth: 2,
    height: 70,
    justifyContent: 'center',
    marginBottom: 5,
    width: 70,
  },
  caterogyScrollView: {
    flex: 1,
    justifyContent: 'space-between',
  },
  cateroryLabel: {
    color: theme.colors.text,
    fontWeight: '400',
    fontSize: 10,
    lineHeight: 15,
  },
  container: {
    padding: staticValues.padding,
  },
  dotIndicatorContainer: {
    marginTop: 15,
  },
  headerContainer: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  icon: {
    flex: 1,
    alignItems: 'flex-end',
  },
  linkText: {
    ...globalStyles.linkText,
    fontSize: staticValues.normalFont,
  },
  searchInput: {
    flex: 6,
  },
  sectionHeader: {
    fontWeight: '700',
    fontSize: staticValues.normalFont,
    lineHeight: staticValues.lineHeight,
  },
  sectionHeaderContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 25,
    marginBottom: 15,
  },
});
