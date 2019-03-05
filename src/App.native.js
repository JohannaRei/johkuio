import React, { Component } from 'react';
//import RNLocalize from 'react-native-localize';
import RootStack from './navigation/RootStack';
//import setI18nConfig from './lang';

class App extends Component {
  /*constructor(props) {
    super(props);
    setI18nConfig();
  }

  componentDidMount() {
    RNLocalize.addEventListener('change', this.handleLocalizationChange);
  }

  componentWillUnmount() {
    RNLocalize.removeEventListener('change', this.handleLocalizationChange);
  }

  handleLocalizationChange = () => {
    setI18nConfig();
    this.forceUpdate();
  };*/

  render() {
    return <RootStack />;
  }
}

export default App;
