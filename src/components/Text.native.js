import React from 'react';
import { Text, StyleSheet } from 'react-native';
import t from '../lang';

const Text = ({ text, textStyle }) => (
  <Text style={[styles.text, textStyle]}>{t(text)}</Text>
);

const styles = StyleSheet.create({
  text: {
    fontSize: 16
  }
});

export default Text;
