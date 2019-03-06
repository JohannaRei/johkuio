// @flow
import React, { Component } from 'react';
import { Screen, Title, Text } from '../components';

type Props = {};
type State = {};

class AboutScreen extends Component<Props, State> {
  render() {
    return (
      <Screen>
        <Title screen="aboutScreen" />
      </Screen>
    );
  }
}

export default AboutScreen;
