import React from 'react';
import { View, StyleSheet } from 'react-native';

const Screen = ({ children }) => (
  <View style={styles.container}>{children}</View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#fff'
  }
});

export default Screen;
