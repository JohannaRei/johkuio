import React from 'react';
import { Text, StyleSheet } from 'react-native';
import { withNamespaces } from 'react-i18next';

const Title = ({ screen, t }) => (
  <Text style={styles.text}>{t(`${screen}.title`)}</Text>
);

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
    fontWeight: 'bold'
  }
});

export default withNamespaces()(Title);
