// @flow
import React from 'react';
import { TouchableOpacity, StyleSheet, View } from 'react-native';
import { Text } from './';

type Props = {
  onPress: () => void,
  title: string
};

const NavButton = ({ onPress, title }: Props) => (
  <TouchableOpacity onPress={onPress}>
    <View style={styles.button}>
      <Text text={title} />
    </View>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  button: {
    backgroundColor: 'red',
    marginHorizontal: 20
  }
});

export default NavButton;
