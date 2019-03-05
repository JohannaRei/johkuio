import React from 'react';
import { StyleSheet } from 'react-native';
import Text from './Text';

const Title = ({ screen }) => (
  <Text text={`${screen}.title`} textStyle={styles.title} />
);

const styles = StyleSheet.create({
  title: {
    fontSize: 30,
    fontWeight: 'bold'
  }
});

export default Title;
