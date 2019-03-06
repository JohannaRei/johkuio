// @flow
import React from 'react';
import { StyleSheet } from 'react-native';
import Text from './Text';

type Props = {
  screen: string
};

const Title = ({ screen }: Props) => (
  <Text text={`${screen}.title`} textStyle={styles.title} />
);

const styles = StyleSheet.create({
  title: {
    fontSize: 30,
    fontWeight: 'bold'
  }
});

export default Title;
