// Import
import React, {useMemo} from 'react';
import {StyleSheet, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {theme} from '../../styles/theme';

// Interfaces & Types
const size = 18;

interface IRatingStarsProps {
  rating: number;
}
// =====================================================================

// Component
const RatingStars = ({rating}: IRatingStarsProps) => {
  // useMemos
  const emptyStar = useMemo(() => {
    return <Icon color={theme.colors.yellow} name="star-outline" size={size} />;
  }, [size, theme]);

  const fullStar = useMemo(() => {
    return <Icon color={theme.colors.yellow} name="star" size={size} />;
  }, [size, theme]);

  const halfStar = useMemo(() => {
    return (
      <Icon color={theme.colors.yellow} name="star-half-full" size={size} />
    );
  }, [size, theme]);

  const firstStar = useMemo(() => {
    if (rating >= 1) {
      return fullStar;
    }

    if (rating >= 0.5 && rating < 1) {
      return halfStar;
    }

    return emptyStar;
  }, [emptyStar, fullStar, halfStar, rating]);

  const secondStar = useMemo(() => {
    if (rating >= 2) {
      return fullStar;
    }

    if (rating >= 1.5 && rating < 2) {
      return halfStar;
    }

    return emptyStar;
  }, [emptyStar, fullStar, halfStar, rating]);

  const thirdStar = useMemo(() => {
    if (rating >= 3) {
      return fullStar;
    }

    if (rating >= 2.5 && rating < 3) {
      return halfStar;
    }

    return emptyStar;
  }, [emptyStar, fullStar, halfStar, rating]);

  const fourthStar = useMemo(() => {
    if (rating >= 4) {
      return fullStar;
    }

    if (rating >= 3.5 && rating < 4) {
      return halfStar;
    }

    return emptyStar;
  }, [emptyStar, fullStar, halfStar, rating]);

  const fifthStar = useMemo(() => {
    if (rating === 5) {
      return fullStar;
    }

    if (rating >= 4.5 && rating < 5) {
      return halfStar;
    }

    return emptyStar;
  }, [emptyStar, fullStar, halfStar, rating]);
  // =====================================================================

  // Render
  return (
    <View style={styles.starsContainer}>
      {firstStar}
      {secondStar}
      {thirdStar}
      {fourthStar}
      {fifthStar}
    </View>
  );
};

export default RatingStars;

const styles = StyleSheet.create({
  starsContainer: {
    flexDirection: 'row',
  },
});
