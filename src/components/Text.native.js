// @flow
import React from 'react';
import { Text as RNText, StyleSheet } from 'react-native';
import t from '../lang/index.native';

type Props = {
  text?: string,
  textStyle: {}
};

const Text = ({ text, textStyle }: Props) => (
  <RNText style={[styles.text, textStyle]}>{t(text)}</RNText>
);

const styles = StyleSheet.create({
  text: {
    fontSize: 16
  }
});

export default Text;
