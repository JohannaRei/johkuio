// @flow
import React, { Component } from 'react';
import { Screen, Header, Text, Content } from '../../components';
import { Platform } from 'react-native';
import data from './aboutData.json';

type Props = {
  navigation: any
};
type State = {};

class AboutScreen extends Component<Props, State> {
  render() {
    return (
      <Screen>
        <Header screen="aboutScreen" {...this.props} />
        <Content data={data} />
      </Screen>
    );
  }
}

export default AboutScreen;
