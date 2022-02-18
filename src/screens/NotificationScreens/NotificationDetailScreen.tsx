// Import
import {RouteProp, useRoute} from '@react-navigation/native';
import React, {useCallback, useMemo} from 'react';
import {Pressable, StyleSheet, View} from 'react-native';
import {Text} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {
  notificationActivities,
  notificationFeeds,
  notificationOffers,
} from '../../mockData/notifcation-mock';
import {INotificationDetail} from '../../models/notification-model';
import {HomeStackParamList} from '../../routes/HomeRoutes';
import {globalStyles, staticValues} from '../../styles';
import {theme} from '../../styles/theme';

// Interfaces & Types
type RoutePropType = RouteProp<HomeStackParamList, 'NotificationDetail'>;

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
    <View style={globalStyles.container}>
      {notificationDetails.details.map((detail, index) => {
        return (
          <Pressable
            key={detail.title + index}
            onPress={onPress}
            style={styles.container}>
            {/* Icon */}
            <Icon
              color={theme.colors.primary}
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
    </View>
  );
};

export default NotificationDetailScreen;

const styles = StyleSheet.create({
  container: {
    alignItems: 'flex-start',
    flexDirection: 'row',
    marginBottom: 30,
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
    color: theme.colors.dark,
    fontSize: staticValues.normalFont,
    fontWeight: '700',
  },
});
