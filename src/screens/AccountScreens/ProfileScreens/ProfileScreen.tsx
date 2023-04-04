// Imports
import {useNavigation} from '@react-navigation/native';
import React, {useCallback} from 'react';
import {Image, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import MCIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import {Button} from '../../../components/common';
import {ScreenNames} from '../../../routes/routesHelpers';
import {globalStyles, staticValues} from '../../../styles';
import {theme} from '../../../styles/theme';
// =====================================================================

// Image
const profileImage = require('../../../assets/images/profile.png');
// =====================================================================

// Component
const ProfileScreen = () => {
  // Hooks
  const navigation = useNavigation();
  // =====================================================================

  // useCallbacks
  const onChangePassword = useCallback(() => {
    navigation.navigate(ScreenNames.ChangePassword);
  }, [navigation]);

  const onEdit = useCallback(() => {
    navigation.navigate(ScreenNames.EditProfile);
  }, [navigation]);
  // =====================================================================

  // Render
  return (
    <SafeAreaView style={globalStyles.flex}>
      <View style={globalStyles.container}>
        {/* Avatar & name */}
        <View style={styles.profile}>
          <Image source={profileImage} style={styles.image} />

          <Text style={theme.typography.h5}>Maximus Gold</Text>
        </View>

        {/* Gender */}
        <View style={styles.row}>
          <View style={styles.field}>
            <MCIcon
              color={theme.colors.primaryBlue}
              name="gender-male-female"
              size={staticValues.iconSize}
            />

            <Text style={styles.title}>Gender</Text>
          </View>

          <Text>Male</Text>
        </View>

        {/* Birthday */}
        <View style={styles.row}>
          <View style={styles.field}>
            <MCIcon
              color={theme.colors.primaryBlue}
              name="calendar-blank-outline"
              size={staticValues.iconSize}
            />

            <Text style={styles.title}>Birthday</Text>
          </View>

          <Text>01-01-1990</Text>
        </View>

        {/* Email */}
        <View style={styles.row}>
          <View style={styles.field}>
            <MCIcon
              color={theme.colors.primaryBlue}
              name="email-outline"
              size={staticValues.iconSize}
            />

            <Text style={styles.title}>Email</Text>
          </View>

          <Text>email@gmail.com</Text>
        </View>

        {/* Phone number */}
        <View style={styles.row}>
          <View style={styles.field}>
            <MCIcon
              color={theme.colors.primaryBlue}
              name="cellphone"
              size={staticValues.iconSize}
            />

            <Text style={styles.title}>Phone Number</Text>
          </View>

          <Text>303-123-4312</Text>
        </View>

        {/* Edit profile button */}
        <View style={styles.button}>
          <Button onPress={onEdit}>Edit Profile</Button>
        </View>

        {/* Change password input */}
        <View style={styles.button}>
          <Button onPress={onChangePassword}>Change Password</Button>
        </View>
      </View>
    </SafeAreaView>
  );
};
// =====================================================================

// Styles
const styles = StyleSheet.create({
  button: {
    marginTop: 16,
  },
  field: {
    flexDirection: 'row',
  },
  image: {
    borderRadius: 40,
    height: 80,
    marginRight: 10,
    width: 80,
  },
  profile: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  row: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 16,
  },
  title: {
    ...theme.typography.h5,
    marginLeft: 10,
  },
});
// =====================================================================

export default ProfileScreen;
