// @flow
import React, { Component } from 'react';
import { Platform, StyleSheet, Button } from 'react-native';
import { Screen, Header, Text } from '../components';

type Props = {
  navigation: any
};
type State = {};

class HomeScreen extends Component<Props, State> {
  render() {
    return (
      <Screen>
        <Header screen="homeScreen" navigation={this.props.navigation} />
      </Screen>
    );
  }
}

export default HomeScreen;
