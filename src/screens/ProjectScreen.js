// @flow
import React, { Component } from 'react';
import { Screen, Header } from '../components';

type Props = {
  navigation: any
};
type State = {};

class ProjectScreen extends Component<Props, State> {
  render() {
    return (
      <Screen>
        <Header screen="projectsScreen" {...this.props} />
      </Screen>
    );
  }
}

export default ProjectScreen;
