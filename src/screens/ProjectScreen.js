// @flow
import React, { Component } from 'react';
import { Text } from 'react-native';
import { Screen, Title } from '../components';

type Props = {};
type State = {};

class ProjectScreen extends Component<Props, State> {
  render() {
    return (
      <Screen>
        <Title screen="projectsScreen" />
      </Screen>
    );
  }
}

export default ProjectScreen;
