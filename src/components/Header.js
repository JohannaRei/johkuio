// @flow
import React from 'react';
import { View, StyleSheet, Platform, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { Title } from './';

type Props = {
  screen: string,
  navigation: any
};

const Header = ({ screen, navigation }: Props) => (
  <View style={styles.container}>
    <TouchableOpacity
      style={styles.button}
      onPress={() => navigation.openDrawer()}
    >
      <Icon name={`${Platform.OS === 'ios' ? 'ios' : 'md'}-menu`} size={30} />
    </TouchableOpacity>
    <Title screen={screen} />
  </View>
);

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 50,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  button: {
    position: 'absolute',
    left: 20
  }
});

export default Header;
