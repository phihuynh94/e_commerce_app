// Import
import React, {useCallback, useState} from 'react';
import {useForm} from 'react-hook-form';
import {Pressable, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {Button, RatingStars, TextInput} from '../../components/common';
import {globalStyles, staticValues} from '../../styles';
import {theme} from '../../styles/theme';
// =====================================================================

// Component
const WriteReviewScreen = () => {
  // hooks
  const {
    control,
    formState: {errors},
    handleSubmit,
  } = useForm<{review: string}>();
  // =====================================================================

  // useStates
  const [rating, setRating] = useState(0);
  // =====================================================================

  // useCallbacks
  const onAddPhoto = useCallback(() => {
    console.log('add photo');
  }, []);

  const onAddReview = useCallback(() => {
    console.log('add review');
  }, []);

  const onRating = useCallback((rate: number) => {
    setRating(rate);
  }, []);
  // =====================================================================

  // Render
  return (
    <SafeAreaView style={globalStyles.flex}>
      <View style={globalStyles.container}>
        {/* Subtitle */}
        <Text style={styles.text}>
          Please write Overall Level of satisfaction with your shipping/delivery
          service
        </Text>

        {/* Rating */}
        <View style={styles.ratingContainer}>
          <View style={styles.rating}>
            <RatingStars onRating={onRating} rating={rating} size={40} />
          </View>
          <Text style={styles.text}>{rating}/5</Text>
        </View>

        {/* Write review input */}
        <Text style={styles.text}>Write Your Review</Text>
        <View style={styles.reviewInput}>
          <TextInput
            control={control}
            errorMessage={errors.review?.message}
            multiline={true}
            name="review"
            placeholder="Write your review here."
          />
        </View>

        {/* Add photo */}
        <Text style={styles.text}>Add Photo</Text>
        <Pressable onPress={onAddPhoto} style={styles.addPhoto}>
          <Icon
            color={theme.colors.primaryGray}
            name="plus"
            size={staticValues.iconSize}
          />
        </Pressable>

        {/* Add review button */}
        <Button onPress={handleSubmit(onAddReview)}>add review</Button>
      </View>
    </SafeAreaView>
  );
};
// =====================================================================

// Styles
const styles = StyleSheet.create({
  addPhoto: {
    alignItems: 'center',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: theme.colors.primaryGray,
    height: 72,
    justifyContent: 'center',
    marginVertical: 10,
    width: 72,
  },
  rating: {
    marginRight: 10,
  },
  ratingContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    marginVertical: 15,
  },
  reviewInput: {
    marginVertical: 10,
  },
  text: {
    color: theme.colors.primaryBlack,
    ...theme.typography.h5,
  },
});
// =====================================================================

export default WriteReviewScreen;
