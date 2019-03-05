import React from 'react';
import { Text, Platform, StyleSheet, Button } from 'react-native';
import { Screen, Title } from '../components';

const HomeScreen = ({ navigation }) => {
  return (
    <Screen>
      <Title tx="Home" />
      <Text>Testing</Text>
    </Screen>
  );
};

export default HomeScreen;
