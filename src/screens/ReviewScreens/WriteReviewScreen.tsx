// Import
import React, {useCallback, useState} from 'react';
import {Pressable, SafeAreaView, StyleSheet, View} from 'react-native';
import {Text} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {Button, TextInput} from '../../common';
import RatingStars from '../../common/RatingStars/RatingStars';
import {globalStyles, staticValues} from '../../styles';
import {theme} from '../../styles/theme';
// =====================================================================

// Component
const WriteReviewScreen = () => {
  // useStates
  const [rating, setRating] = useState(0);
  const [review, setReview] = useState('');
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

  const onWriteReview = useCallback((input: string) => {
    setReview(input);
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
            multiline={true}
            onChangeText={onWriteReview}
            placeholder="Write your review here."
            value={review}
          />
        </View>

        {/* Add photo */}
        <Text style={styles.text}>Add Photo</Text>
        <Pressable onPress={onAddPhoto} style={styles.addPhoto}>
          <Icon
            color={theme.colors.text}
            name="plus"
            size={staticValues.iconSize}
          />
        </Pressable>

        {/* Add review button */}
        <Button onPress={onAddReview}>add review</Button>
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
    borderColor: theme.colors.text,
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
    color: theme.colors.dark,
    fontSize: staticValues.normalFont,
    fontWeight: '700',
  },
});
// =====================================================================

export default WriteReviewScreen;
