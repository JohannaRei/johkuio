import React from 'react';
import { TouchableOpacity, View, Text } from 'react-native';
import { NavigationActions } from 'react-navigation';

const DrawerButton = ({ screen, openScreen }) => (
  <TouchableOpacity onPress={openScreen}>
    <View>
      <Text>{screen}</Text>
    </View>
  </TouchableOpacity>
);

export default DrawerButton;
