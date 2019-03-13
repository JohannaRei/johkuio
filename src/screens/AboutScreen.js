// @flow
import React, { Component } from 'react';
import { Screen, Header, Text } from '../components';
import { Platform } from 'react-native';

type Props = {
  navigation: any
};
type State = {};

class AboutScreen extends Component<Props, State> {
  render() {
    return (
      <Screen>
        <Header screen="aboutScreen" {...this.props} />
      </Screen>
    );
  }
}

export default AboutScreen;
