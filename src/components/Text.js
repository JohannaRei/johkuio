// @flow
import React from 'react';
import { Text as RNText, StyleSheet } from 'react-native';
import { withNamespaces } from 'react-i18next';

type Props = {
  text: string,
  t: string => string,
  textStyle?: {}
};

const Text = ({ text, t, textStyle }: Props) => (
  <RNText style={[styles.text, textStyle]}>{t(text)}</RNText>
);

const styles = StyleSheet.create({
  text: {
    fontSize: 16
  }
});

export default withNamespaces()(Text);
