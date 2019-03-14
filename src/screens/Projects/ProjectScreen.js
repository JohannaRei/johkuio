// @flow
import React, { Component } from 'react';
import { Screen, Header, Content } from '../../components';
//todo: move to firebase
import data from './projectData.json';

type Props = {
  navigation: any
};
type State = {};

class ProjectScreen extends Component<Props, State> {
  render() {
    return (
      <Screen>
        <Header screen="projectsScreen" {...this.props} />
        <Content data={data} />
      </Screen>
    );
  }
}

export default ProjectScreen;
