// @flow
import React from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import { SafeAreaView, DrawerItems } from 'react-navigation';
import Text from './Text';
import Icon from 'react-native-vector-icons/Ionicons';

type Props = {
  navigation: any,
  props: any
};

const Drawer = ({ navigation, ...props }: Props) => (
  <SafeAreaView
    style={styles.container}
    forceInset={{ top: 'always', horizontal: 'never' }}
  >
    <TouchableOpacity
      onPress={() => navigation.closeDrawer()}
      style={styles.button}
    >
      <Icon size={30} name="md-close" />
    </TouchableOpacity>
    <DrawerItems {...props} />
  </SafeAreaView>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'yellow'
  },
  button: {
    position: 'absolute',
    left: 20,
    top: 60
  }
});

export default Drawer;
