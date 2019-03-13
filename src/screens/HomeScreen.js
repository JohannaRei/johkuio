// @flow
import React, { Component } from 'react';
import { Platform, StyleSheet, Button } from 'react-native';
import { Screen, Text, Header } from '../components';

type Props = {
  navigation: any
};
type State = {};

class HomeScreen extends Component<Props, State> {
  render() {
    return (
      <Screen>
        <Header screen="homeScreen" {...this.props} />
      </Screen>
    );
  }
}

export default HomeScreen;
