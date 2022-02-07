// Import
import React, {useMemo} from 'react';
import {StyleSheet, View} from 'react-native';
import {theme} from '../../styles/theme';

// Interfaces & Types
interface IDotsIndicatorProps<T> {
  index: number;
  array: T[];
}
// =====================================================================

// Component
const DotsIndicator = <T,>({index, array}: IDotsIndicatorProps<T>) => {
  // useMemos
  const firstDot = useMemo(() => {
    // 1st item in any array length => return selected dot
    if (index === 0) return [styles.dot, styles.selectedDot];

    // else => return dot
    return styles.dot;
  }, [index]);

  const secondDot = useMemo(() => {
    // 2nd item in any array length => return selected dot
    if (index === 1) return [styles.dot, styles.selectedDot];

    // else => return dot
    return styles.dot;
  }, [index]);

  const thirdDot = useMemo(() => {
    // 2nd last item in any array length => return dot
    if (index === array.length - 2 && array.length >= 5) return styles.dot;

    // item in between the 2nd first & the 2nd last items in any array length => return selected dot
    if (index > 1 && index <= array.length - 2)
      return [styles.dot, styles.selectedDot];

    // 3rd item in array length of 3 => return selected dot
    if (index === 2 && array.length === 3)
      return [styles.dot, styles.selectedDot];

    // else => return dot
    return styles.dot;
  }, [index, array.length]);

  const fourthDot = useMemo(() => {
    // 4th item in array length of 4 => return selected dot
    if (index === 3 && array.length === 4)
      return [styles.dot, styles.selectedDot];

    // 2nd last item in array length of 5 or greater => return selected dot
    if (index === array.length - 2 && array.length >= 5)
      return [styles.dot, styles.selectedDot];

    // else => return dot
    return styles.dot;
  }, [index, array.length]);

  const fifthDot = useMemo(() => {
    // last item in any array length => return selected dot
    if (index === array.length - 1) return [styles.dot, styles.selectedDot];

    // else => return dot
    return styles.dot;
  }, [index, array.length]);
  // =====================================================================

  // Render
  return (
    <View style={styles.dotContainer}>
      <View style={firstDot} />
      {array.length > 1 && <View style={secondDot} />}
      {array.length > 2 && <View style={thirdDot} />}
      {array.length > 3 && <View style={fourthDot} />}
      {array.length > 4 && <View style={fifthDot} />}
    </View>
  );
};

export default DotsIndicator;

const styles = StyleSheet.create({
  dotContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    margin: 2,
    backgroundColor: theme.colors.accent,
  },
  selectedDot: {
    backgroundColor: theme.colors.primary,
  },
});
