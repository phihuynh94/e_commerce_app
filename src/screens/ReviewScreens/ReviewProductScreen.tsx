// Imports
import {useNavigation} from '@react-navigation/native';
import React, {useCallback, useState} from 'react';
import {
  FlatList,
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {Button} from '../../common';
import ReviewCard from '../../components/Review/ReviewCard/ReviewCard';
import {reviews} from '../../mockData/reviews-mock';
import {ScreenNames} from '../../routes/routesHelpers';
import {globalStyles, staticValues} from '../../styles';
import {theme} from '../../styles/theme';
// =====================================================================

// Component
const ReviewProductScreen = () => {
  // Hooks
  const navigation = useNavigation();
  // =====================================================================

  // useStates
  const [selectedRatingBox, setSelectedRatingBox] = useState(-1);
  // =====================================================================

  // useCallbacks
  const onRatingBox = useCallback(
    (index: number) => () => {
      setSelectedRatingBox(index);
    },
    [],
  );

  const onWriteReview = useCallback(() => {
    navigation.navigate(ScreenNames.WriteReview);
  }, [navigation]);

  const renderHeader = useCallback(() => {
    return (
      <>
        {/* Select rating box */}
        <ScrollView
          bounces={false}
          horizontal
          showsHorizontalScrollIndicator={false}>
          <Pressable
            onPress={onRatingBox(-1)}
            style={selectedRatingBoxStyle(-1)}>
            <Text style={styles.textBox}>All</Text>
          </Pressable>

          {[...Array(5)].map((e, i) => (
            <Pressable
              onPress={onRatingBox(i)}
              style={selectedRatingBoxStyle(i)}
              key={i}>
              <Icon color={theme.colors.yellow} name="star" size={18} />
              <Text style={styles.textBox}>{i + 1}</Text>
            </Pressable>
          ))}
        </ScrollView>

        {/* Write review button */}
        <View style={styles.button}>
          <Button onPress={onWriteReview}>write review</Button>
        </View>
      </>
    );
  }, [selectedRatingBox, theme]);

  const renderReview = useCallback(({item}) => {
    return <ReviewCard review={item} />;
  }, []);

  const selectedRatingBoxStyle = useCallback(
    (index: number) => {
      if (index === selectedRatingBox) {
        return {
          ...styles.starsBox,
          backgroundColor: theme.colors.primaryLight,
        };
      }

      return {
        ...styles.starsBox,
      };
    },
    [selectedRatingBox, theme],
  );
  // =====================================================================

  // Render
  return (
    <SafeAreaView style={globalStyles.flex}>
      <FlatList
        data={reviews}
        ListHeaderComponent={renderHeader}
        renderItem={renderReview}
        style={globalStyles.container}
      />
    </SafeAreaView>
  );
};

export default ReviewProductScreen;

const styles = StyleSheet.create({
  button: {
    marginTop: 5,
  },
  comment: {
    color: theme.colors.text,
    fontSize: 12,
    fontWeight: '400',
    lineHeight: 20,
    marginVertical: 15,
  },
  date: {
    color: theme.colors.text,
    fontSize: 10,
    fontWeight: '400',
    lineHeight: 15,
    marginVertical: 10,
  },
  footer: {
    marginBottom: 20,
  },
  image: {
    height: 75,
    marginRight: 15,
    width: 75,
  },
  imageContainer: {
    flexDirection: 'row',
  },
  profile: {
    flexDirection: 'row',
  },
  profileImage: {
    borderRadius: 25,
    height: 50,
    marginRight: 15,
    width: 50,
  },
  starsBox: {
    alignItems: 'center',
    borderColor: theme.colors.border,
    borderRadius: 5,
    borderWidth: 1,
    flexDirection: 'row',
    height: 50,
    justifyContent: 'center',
    marginRight: 10,
    padding: 16,
    width: 60,
  },
  textBox: {
    color: theme.colors.primary,
    fontWeight: '700',
    fontSize: 12,
    lineHeight: 18,
    marginLeft: 2,
  },
  reviewContainer: {
    marginVertical: 10,
  },
  username: {
    fontSize: staticValues.normalFont,
    fontWeight: '700',
    marginLeft: 5,
    marginVertical: 5,
  },
});
