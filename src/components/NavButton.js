import React from 'react';
import { TouchableOpacity, StyleSheet, View, Text } from 'react-native';

const NavButton = ({ onPress, title }) => (
  <TouchableOpacity onPress={onPress}>
    <View style={styles.button}>
      <Text>{title}</Text>
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
