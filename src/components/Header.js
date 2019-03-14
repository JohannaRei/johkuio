// @flow
import React, { Component } from 'react';
import { View, StyleSheet, Platform, TouchableOpacity } from 'react-native';
import Icon from './Icon';
import Title from './Title';

type Props = {
  screen: string,
  navigation: any
};

class Header extends Component<Props> {
  openDrawer = () => {
    if (Platform.OS === 'web') {
      console.log('moi');
    } else {
      this.props.navigation.openDrawer();
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity style={styles.button} onPress={this.openDrawer}>
          <Icon name="md-menu" />
        </TouchableOpacity>
        <Title screen={this.props.screen} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 50,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent'
  },
  button: {
    position: 'absolute',
    left: 20
  }
});

export default Header;
