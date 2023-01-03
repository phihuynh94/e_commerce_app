// Imports
import React, {useMemo, useState} from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {Divider, RatingStars} from '../../../common';
import {IReview} from '../../../models/review-model';
import {theme} from '../../../styles/theme';

// =====================================================================

const profileImage = require('../../../assets/images/profile.png');

// Interface
interface IReviewCardProps {
  review: IReview;
}
// =====================================================================

// Component
const ReviewCard = ({review}: IReviewCardProps) => {
  // useStates
  const [isImage, setIsImage] = useState(true);
  // =====================================================================

  // useMemos
  const isImageExist = useMemo(
    () => () => {
      setIsImage(false);
    },
    [],
  );
  // =====================================================================

  // Render
  return (
    <>
      <View style={styles.reviewContainer}>
        {/* User's profile */}
        <View style={styles.profile}>
          {/* User's profile image */}
          {review.user.profileUrl && isImage ? (
            <Image
              onError={isImageExist}
              source={{uri: review.user.profileUrl}}
              style={styles.profileImage}
            />
          ) : (
            <Image source={profileImage} style={styles.profileImage} />
          )}

          <View>
            {/* Username */}
            <Text style={styles.username}>
              {review.user.name.firstname} {review.user.name.lastname}
            </Text>

            {/* Rating */}
            <RatingStars rating={review.rating} />
          </View>
        </View>

        {/* Comment */}
        <Text style={styles.comment}>{review.comment}</Text>

        {/* Images */}
        {review.imageUrls.length > 0 && review.imageUrls[0] !== '' && (
          <View style={styles.imageContainer}>
            {review.imageUrls.map((url: string) => {
              return (
                <Image key={url} source={{uri: url}} style={styles.image} />
              );
            })}
          </View>
        )}

        {/* Date */}
        <Text style={styles.date}>{review.date}</Text>

        {/* Divider */}
        <Divider />
      </View>
    </>
  );
};

export default ReviewCard;

const styles = StyleSheet.create({
  comment: {
    fontSize: 12,
    lineHeight: 20,
    marginVertical: 15,
  },
  date: {
    color: theme.colors.primaryBlack,
    fontSize: 10,
    fontWeight: '400',
    lineHeight: 15,
    marginVertical: 10,
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
  reviewContainer: {
    marginVertical: 10,
  },
  username: {
    ...theme.typography.h5,
    marginLeft: 5,
    marginVertical: 5,
  },
});
