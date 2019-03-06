// @flow
import React, { Component } from 'react';
import { View } from 'react-native';
import WebRoutesGenerator from './navigation/NativeWebRouteWrapper';
import TopNav from './navigation/TopNav';
import routeMap from './navigation/routeMap';

type Props = {};

class App extends Component<Props> {
  render() {
    return (
      <View>
        <TopNav />
        {WebRoutesGenerator({ routeMap })}
      </View>
    );
  }
}

export default App;
