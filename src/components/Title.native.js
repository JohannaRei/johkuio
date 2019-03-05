import React from 'react';
import { Text, StyleSheet } from 'react-native';
import t from '../lang';

const Title = ({ screen }) => (
  <Text style={styles.text}>{t(`${screen}.title`)}</Text>
);

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
    fontWeight: 'bold'
  }
});

export default Title;
