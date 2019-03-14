// @flow
import React from 'react';
import { View, Text } from 'react-native';

type Props = {
  title: string,
  children?: any
};

const ContentCard = ({ title, children }: Props) => (
  <View>
    <Text>{title}</Text>
    {children}
  </View>
);

export default ContentCard;
