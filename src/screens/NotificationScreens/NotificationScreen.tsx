// Import
import {useNavigation} from '@react-navigation/native';
import React, {useCallback} from 'react';
import {Pressable, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import {Badge} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {ScreenNames} from '../../routes/routesHelpers';
import {globalStyles, staticValues} from '../../styles';
import {theme} from '../../styles/theme';
// =====================================================================

// Interface
interface INotification {
  badge: number;
  icon: string;
  title: 'Offer' | 'Feed' | 'Activity';
}
// =====================================================================

// Component
const NotificationScreen = () => {
  // Hooks
  const navigation = useNavigation();
  // =====================================================================

  // useCallbacks
  const onPress = useCallback(
    (title: 'Offer' | 'Feed' | 'Activity') => () => {
      navigation.navigate(ScreenNames.NotificationDetail, {
        title,
      });
    },
    [navigation],
  );

  const renderNotification = useCallback(
    ({icon, title, badge}: INotification) => {
      return (
        <Pressable onPress={onPress(title)} style={styles.container}>
          <Icon
            color={theme.colors.primaryBlue}
            name={icon}
            size={staticValues.iconSize}
            style={styles.icon}
          />

          <Text style={styles.title}>{title}</Text>

          <View>
            <Badge>{badge}</Badge>
          </View>
        </Pressable>
      );
    },
    [onPress],
  );
  // =====================================================================

  // Render
  return (
    <SafeAreaView style={globalStyles.flex}>
      <View style={globalStyles.container}>
        {/* Offer notification */}
        {renderNotification({badge: 2, icon: 'tag-outline', title: 'Offer'})}

        {/* Feed notification */}
        {renderNotification({
          badge: 2,
          icon: 'newspaper-variant-outline',
          title: 'Feed',
        })}

        {/* Activity notification */}
        {renderNotification({
          badge: 2,
          icon: 'bell-outline',
          title: 'Activity',
        })}
      </View>
    </SafeAreaView>
  );
};
// =====================================================================

// Styles
const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flexDirection: 'row',
    marginBottom: 30,
  },
  icon: {
    paddingHorizontal: 10,
  },
  title: {
    ...theme.typography.h6,
    color: theme.colors.primaryBlack,
    flex: 1,
  },
});
// =====================================================================

export default NotificationScreen;
