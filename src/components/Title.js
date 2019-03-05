import React from 'react';
import { Text, StyleSheet } from 'react-native';

const Title = ({ tx }) => <Text style={styles.text}>{tx}</Text>;

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
    fontWeight: 'bold'
  }
});

export default Title;
