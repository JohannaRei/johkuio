// @flow
import React, { Component } from 'react';
import { Platform, StyleSheet, Button } from 'react-native';
import { Screen, Text, Header, Content } from '../../components';
import data from './homeData.json';

type Props = {
  navigation: any
};
type State = {};

class HomeScreen extends Component<Props, State> {
  render() {
    return (
      <Screen>
        <Header screen="homeScreen" {...this.props} />
        <Content data={data} />
      </Screen>
    );
  }
}

export default HomeScreen;
