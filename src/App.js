import React, { Component } from 'react';
import { View } from 'react-native';
import WebRoutesGenerator from './navigation/NativeWebRouteWrapper';
import TopNav from './navigation/TopNav';
import routeMap from './navigation/routeMap';

class App extends Component {
  render() {
    return (
      <View style={{ height: '100vh', width: '100vw' }}>
        <TopNav />
        {WebRoutesGenerator({ routeMap })}
      </View>
    );
  }
}

export default App;
