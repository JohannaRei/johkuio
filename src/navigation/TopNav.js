import React from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import { withRouter } from 'react-router-dom';
import { NavButton } from '../components';

const TopNav = ({ history }) => {
  return (
    <View style={styles.main}>
      <NavButton title="Home" onPress={() => history.push('/')} />
      <NavButton title="About" onPress={() => history.push('/about')} />
      <NavButton title="Projects" onPress={() => history.push('/projects')} />
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    height: 50,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default withRouter(TopNav);
