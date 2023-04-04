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
import {Button} from '../../components/common';
import ReviewCard from '../../components/Review/ReviewCard/ReviewCard';
import {reviews} from '../../mockData/reviews.mock';
import {ScreenNames} from '../../routes/routesHelpers';
import {globalStyles} from '../../styles';
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

  const selectedRatingBoxStyle = useCallback(
    (index: number) => {
      if (index === selectedRatingBox) {
        return {
          ...styles.starsBox,
          backgroundColor: theme.colors.secondaryBlue,
        };
      }

      return {
        ...styles.starsBox,
      };
    },
    [selectedRatingBox],
  );

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
              key={i}
              onPress={onRatingBox(i)}
              style={selectedRatingBoxStyle(i)}>
              <Icon color={theme.colors.primaryYellow} name="star" size={18} />
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
  }, [onRatingBox, onWriteReview, selectedRatingBoxStyle]);

  const renderReview = useCallback(({item}) => {
    return <ReviewCard review={item} />;
  }, []);
  // =====================================================================

  // Render
  return (
    <SafeAreaView style={globalStyles.flex}>
      <FlatList
        ListHeaderComponent={renderHeader}
        data={reviews}
        renderItem={renderReview}
        style={globalStyles.container}
      />
    </SafeAreaView>
  );
};
// =====================================================================

// Styles
const styles = StyleSheet.create({
  button: {
    marginTop: 5,
  },
  starsBox: {
    alignItems: 'center',
    borderColor: theme.colors.secondaryGray,
    borderRadius: 5,
    borderWidth: 2,
    flexDirection: 'row',
    height: 50,
    justifyContent: 'center',
    marginRight: 10,
    padding: 16,
    width: 60,
  },
  textBox: {
    color: theme.colors.primaryBlue,
    fontWeight: '700',
    fontSize: 12,
    lineHeight: 18,
    marginLeft: 2,
  },
});
// =====================================================================

export default ReviewProductScreen;
