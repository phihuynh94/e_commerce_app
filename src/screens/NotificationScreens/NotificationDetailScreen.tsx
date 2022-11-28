// Import
import {RouteProp, useRoute} from '@react-navigation/native';
import React, {useCallback, useMemo} from 'react';
import {Pressable, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {AppStackParamList} from '../../../App';
import {
  notificationActivities,
  notificationFeeds,
  notificationOffers,
} from '../../mockData/notifcation-mock';
import {INotificationDetail} from '../../models/notification-model';
import {globalStyles, staticValues} from '../../styles';
import {theme} from '../../styles/theme';
// =====================================================================

// Interfaces & Types
type RoutePropType = RouteProp<AppStackParamList, 'NotificationDetail'>;

interface INotificationDetailItem {
  details: INotificationDetail[];
  icon: string;
}
// =====================================================================

// Component
const NotificationDetailScreen = () => {
  // Hooks
  const route = useRoute<RoutePropType>();

  const {title} = route.params;
  // =====================================================================

  // useMemos
  const notificationDetails: INotificationDetailItem = useMemo(() => {
    switch (title) {
      case 'Activity':
        return {
          details: notificationActivities,
          icon: 'bell-outline',
        };
      case 'Feed':
        return {
          details: notificationFeeds,
          icon: 'newspaper-variant-outline',
        };
      case 'Offer':
        return {
          details: notificationOffers,
          icon: 'tag-outline',
        };
      default:
        return {
          details: [],
          icon: '',
        };
    }
  }, [title]);
  // =====================================================================

  // useCallbacks
  const onPress = useCallback(() => {
    console.log('on press');
  }, []);
  // =====================================================================

  // Render
  return (
    <SafeAreaView style={globalStyles.flex}>
      {notificationDetails.details.map((detail, index) => {
        return (
          <Pressable
            key={detail.title + index}
            onPress={onPress}
            style={styles.container}
          >
            {/* Icon */}
            <Icon
              color={theme.colors.primaryBlue}
              name={notificationDetails.icon}
              size={staticValues.iconSize}
              style={styles.icon}
            />

            <View style={styles.infoContainer}>
              {/* Title */}
              <Text style={styles.title}>{detail.title}</Text>

              {/* Description */}
              <Text style={styles.description}>{detail.description}</Text>

              {/* Date */}
              <Text>{detail.date.toDateString()}</Text>
            </View>
          </Pressable>
        );
      })}
    </SafeAreaView>
  );
};
// =====================================================================

// Styles
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginVertical: 20,
  },
  description: {
    paddingVertical: 10,
  },
  icon: {
    flex: 1,
    paddingHorizontal: 10,
  },
  infoContainer: {
    flex: 11,
  },
  title: {
    ...theme.typography.h5,
    color: theme.colors.primaryBlack,
  },
});
// =====================================================================

export default NotificationDetailScreen;
