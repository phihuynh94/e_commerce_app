import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {Surface} from 'react-native-paper';
import RatingStars from '../../../common/RatingStars/RatingStars';
import {products} from '../../../mockData/products-mock';
import {users} from '../../../mockData/users-mock';
import {staticValues} from '../../../styles';
import {theme} from '../../../styles/theme';

const ReviewCard = () => {
  return (
    <>
      <View style={styles.top}>
        {/* Profile picture */}
        <View style={styles.profilePictureContainer}>
          <Image
            source={{uri: users[0].profileUrl}}
            style={styles.profilePicture}
          />
        </View>

        {/* User name and rating */}
        <View style={styles.nameAndRating}>
          {/* User name */}
          <Text style={styles.userName}>
            {users[0].name.firstname} {users[0].name.lastname}
          </Text>
          {/* Rating stars rate */}
          <RatingStars rating={4} />
        </View>
      </View>

      {/* Comment */}
      <Text>
        Air max are always very comfortable fit, clean and just perfect in every
        way. just the box was too small and scrunched the sneakers up a little
        bit, not sure if the box was always this small but the 90s are and will
        always be one of my favorites.
      </Text>

      <View style={styles.productImageContainer}>
        <Surface style={styles.surface}>
          <Image
            source={{uri: products[0].image}}
            style={styles.productImage}
          />
        </Surface>
        <Surface style={styles.surface}>
          <Image
            source={{uri: products[1].image}}
            style={styles.productImage}
          />
        </Surface>
        <Surface style={styles.surface}>
          <Image
            source={{uri: products[2].image}}
            style={styles.productImage}
          />
        </Surface>
      </View>

      <Text style={styles.date}>December 10, 2022</Text>
    </>
  );
};

export default ReviewCard;

const styles = StyleSheet.create({
  date: {
    color: theme.colors.text,
    fontSize: 10,
    fontWeight: '400',
  },
  nameAndRating: {
    flex: 4,
    justifyContent: 'center',
  },
  productImage: {
    borderRadius: 8,
    height: 70,
    width: 70,
  },
  productImageContainer: {
    flexDirection: 'row',
    marginVertical: 20,
  },
  profilePicture: {
    borderRadius: 25,
    height: 50,
    width: 50,
  },
  profilePictureContainer: {
    flex: 1,
  },
  surface: {
    alignItems: 'center',
    backgroundColor: theme.colors.background,
    borderRadius: 8,
    elevation: 9,
    height: 70,
    justifyContent: 'center',
    marginRight: 10,
    width: 70,
  },
  top: {
    flex: 1,
    flexDirection: 'row',
    marginBottom: 20,
  },
  userName: {
    fontWeight: '700',
    fontSize: staticValues.normalFont,
    lineHeight: staticValues.lineHeight,
  },
});
