// Imports
import {useNavigation} from '@react-navigation/native';
import React, {useCallback, useMemo, useState} from 'react';
import {useForm} from 'react-hook-form';
import {
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import AntIcon from 'react-native-vector-icons/AntDesign';
import FeatherIcon from 'react-native-vector-icons/Feather';
import FAIcon from 'react-native-vector-icons/FontAwesome';
import MCIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import {Divider, TextInput} from '../../components/common';
import {categories} from '../../mockData/categories.mock';
import {products} from '../../mockData/products.mock';
import {IProduct} from '../../models/product.model';
import {ScreenNames} from '../../routes/routesHelpers';
import {globalStyles, staticValues} from '../../styles';
import {theme} from '../../styles/theme';
// =====================================================================

// Component
const ExploreScreen = () => {
  // hooks
  const {control} = useForm<{s: string}>();

  const navigation = useNavigation();
  // =====================================================================

  // useStates
  const [isSearch, setIsSearch] = useState(false);
  const [search, setSearch] = useState('');
  const [searchResult, setSearchResult] = useState<IProduct[]>();
  // =====================================================================

  // useCallbacks
  const onCloseIcon = useCallback(() => {
    setIsSearch(false);
  }, []);

  const onFilterIcon = useCallback(() => {
    console.log('on filter icon');
  }, []);

  const onMicIcon = useCallback(() => {
    console.log('on mic icon');
  }, []);

  const onSearch = useCallback((val: string) => {
    setSearch(val);

    const result = products.reduce<IProduct[]>((acc, cur) => {
      if (cur.title.toLowerCase().includes(val.toLowerCase())) {
        return [...acc, cur];
      }

      return acc;
    }, []);

    setSearchResult(result);
  }, []);

  const onSearchResult = useCallback(
    (product: IProduct) => () => {
      navigation.navigate(ScreenNames.ProductDetail, {
        product,
        title: product.title,
      });
    },
    [navigation],
  );

  const onSearchBlur = useCallback(() => {
    setIsSearch(false);
  }, []);

  const onSearchFocus = useCallback(() => {
    setIsSearch(true);
  }, []);

  const onSortIcon = useCallback(() => {
    console.log('on sort icon');
  }, []);
  // =====================================================================

  // useMemos
  const renderSearchScreen = useMemo(() => {
    if (!search) {
      return <Text>Recently search products</Text>;
    }

    if (search && searchResult && !searchResult[0]) {
      return <Text>Product Not Found</Text>;
    }

    return searchResult?.map(val => (
      <Text key={val.id} onPress={onSearchResult(val)} style={styles.search}>
        {val.title}
      </Text>
    ));
  }, [onSearchResult, search, searchResult]);
  // =====================================================================

  // Render
  return (
    <SafeAreaView style={globalStyles.container}>
      {/* Search text input & icons in header */}
      <View style={styles.headerContainer}>
        {/* Search text input */}
        <View style={styles.searchInput}>
          <TextInput
            blur={!isSearch}
            control={control}
            icon="text-search"
            label="Search Product"
            name="s"
            onBlur={onSearchBlur}
            onChangeText={onSearch}
            onFocus={onSearchFocus}
          />
        </View>

        {!isSearch ? (
          <>
            {/* Sort icon */}
            <Pressable onPress={onSortIcon} style={styles.icon}>
              <FAIcon
                color={theme.colors.primaryGray}
                name="sort-amount-desc"
                size={staticValues.iconSize}
              />
            </Pressable>

            {/* Filter icon */}
            <Pressable onPress={onFilterIcon} style={styles.icon}>
              <AntIcon
                color={theme.colors.primaryGray}
                name="filter"
                size={staticValues.iconSize}
              />
            </Pressable>
          </>
        ) : (
          <>
            {/* Mic icon */}
            <Pressable onPress={onMicIcon} style={styles.icon}>
              <FeatherIcon
                color={theme.colors.primaryGray}
                name="mic"
                size={staticValues.iconSize}
              />
            </Pressable>

            {/* Close icon */}
            <Pressable onPress={onCloseIcon} style={styles.icon}>
              <AntIcon
                color={theme.colors.primaryGray}
                name="close"
                size={staticValues.iconSize}
              />
            </Pressable>
          </>
        )}
      </View>

      {/* Divider */}
      <Divider />

      {/* Normal explore screen */}
      {!isSearch ? (
        <ScrollView style={globalStyles.container}>
          {/* Man fashion */}
          <Text style={styles.sectionHeader}>Man Fashion</Text>

          {/* Man Fashion category list */}
          <View style={styles.categoryList}>
            {categories.map((_, index) => (
              <View key={index} style={styles.cateroryContainer}>
                <View style={styles.cateroryIconContainer}>
                  <MCIcon
                    color={theme.colors.primaryBlue}
                    name="tshirt-crew-outline"
                    size={staticValues.iconSize}
                  />
                </View>
                <Text style={styles.cateroryLabel}>Man Shirt</Text>
              </View>
            ))}
          </View>

          {/* Woman fashion */}
          <Text style={styles.sectionHeader}>Woman Fashion</Text>

          {/* Woman fashion category list */}
          <View style={styles.categoryList}>
            {categories.map((_, index) => (
              <View key={index} style={styles.cateroryContainer}>
                <View style={styles.cateroryIconContainer}>
                  <MCIcon
                    color={theme.colors.primaryBlue}
                    name="tshirt-crew-outline"
                    size={staticValues.iconSize}
                  />
                </View>
                <Text style={styles.cateroryLabel}>Woman Shirt</Text>
              </View>
            ))}
          </View>
        </ScrollView>
      ) : (
        // Search product screen
        <ScrollView style={globalStyles.container}>
          {renderSearchScreen}
        </ScrollView>
      )}
    </SafeAreaView>
  );
};
// =====================================================================

// Styles
const styles = StyleSheet.create({
  categoryList: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  cateroryContainer: {
    alignItems: 'center',
    marginBottom: 20,
    marginRight: 15,
  },
  cateroryIconContainer: {
    alignItems: 'center',
    borderColor: theme.colors.secondaryGray,
    borderRadius: 35,
    borderWidth: 2,
    height: 70,
    justifyContent: 'center',
    marginBottom: 10,
    width: 70,
  },
  cateroryLabel: {
    color: theme.colors.primaryGray,
    fontWeight: '400',
    fontSize: 10,
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
  search: {
    ...theme.typography.small,
    marginVertical: 16,
  },
  searchInput: {
    flex: 8,
  },
  sectionHeader: {
    ...theme.typography.h5,
    marginBottom: 16,
  },
});
// =====================================================================

export default ExploreScreen;
