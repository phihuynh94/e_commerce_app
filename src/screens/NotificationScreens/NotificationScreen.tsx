// Import
import {useNavigation} from '@react-navigation/native';
import React, {useCallback} from 'react';
import {Pressable, StyleSheet, View} from 'react-native';
import {Badge, Text} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {ScreenNames} from '../../routes/routesHelpers';
import {globalStyles, staticValues} from '../../styles';
import {theme} from '../../styles/theme';

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
        <Pressable style={styles.container} onPress={onPress(title)}>
          <Icon
            color={theme.colors.primary}
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
    [],
  );
  // =====================================================================

  // Render
  return (
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
      {renderNotification({badge: 2, icon: 'bell-outline', title: 'Activity'})}
    </View>
  );
};

export default NotificationScreen;

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
    color: theme.colors.dark,
    flex: 1,
    fontSize: staticValues.smallFont,
    fontWeight: '700',
  },
});
