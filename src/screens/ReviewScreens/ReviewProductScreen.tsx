import React, {useCallback} from 'react';
import {FlatList, Image, StyleSheet, Text, View} from 'react-native';
import {Button} from '../../common';
import RatingStars from '../../common/RatingStars/RatingStars';
import {reviews} from '../../mockData/reviews-mock';
import {globalStyles, staticValues} from '../../styles';
import {theme} from '../../styles/theme';

const profileImage = require('../../assets/images/profile.png');

// Component
const ReviewProductScreen = () => {
  // useCallbacks
  const onWriteReview = useCallback(() => {}, []);

  const renderFooter = useCallback(() => {
    return <Button onPress={onWriteReview}>write review</Button>;
  }, []);

  const renderReview = useCallback(({item}) => {
    return (
      <View style={styles.reviewContainer}>
        {/* User's profile */}
        <View style={styles.profile}>
          {/* User's profile image */}
          {item.user.profileUrl ? (
            <Image
              source={{uri: item.user.profileUrl}}
              style={styles.profileImage}
            />
          ) : (
            <Image source={profileImage} style={styles.profileImage} />
          )}

          <View>
            {/* Username */}
            <Text style={styles.username}>
              {item.user.name.firstname} {item.user.name.lastname}
            </Text>

            {/* Rating */}
            <RatingStars rating={item.rating} />
          </View>
        </View>

        {/* Comment */}
        <Text style={styles.comment}>{item.comment}</Text>

        {/* Images */}
        {item.imageUrls.length > 0 && item.imageUrls[0] !== '' && (
          <View style={styles.imageContainer}>
            {item.imageUrls.map((url: string) => {
              return <Image source={{uri: url}} style={styles.image} />;
            })}
          </View>
        )}

        {/* Date */}
        <Text style={styles.date}>{item.date}</Text>

        {/* Divider */}
        <View style={globalStyles.divider} />
      </View>
    );
  }, []);

  return (
    <FlatList
      data={reviews}
      ListFooterComponent={renderFooter}
      ListFooterComponentStyle={styles.footer}
      renderItem={renderReview}
      style={globalStyles.container}
    />
  );
};

export default ReviewProductScreen;

const styles = StyleSheet.create({
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
