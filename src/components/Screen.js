// @flow
import React from 'react';
import { View, StyleSheet } from 'react-native';
import { isWeb } from '../utils';

type Props = {
  children: any
};

const Screen = ({ children }: Props) => (
  <View style={styles.container}>{children}</View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: isWeb() ? 0 : 50,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#fff'
  }
});

export default Screen;
