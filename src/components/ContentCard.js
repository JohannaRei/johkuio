// @flow
import React from 'react';
import { View, Text, StyleSheet, Platform, Dimensions } from 'react-native';

const screenHeight = Dimensions.get('window').height;
const isWeb = Platform.OS === 'web';
type Props = {
  title: string,
  children?: any,
  backgroundColor: string
};

const ContentCard = ({ title, children, backgroundColor }: Props) => (
  <View style={[styles.container, { backgroundColor }]}>
    <Text>{title}</Text>
    {children}
  </View>
);

const styles = StyleSheet.create({
  container: {
    height: Platform.OS === 'web' ? '80vh' : screenHeight * 0.8,
    marginHorizontal: isWeb ? '10vw' : 0
  }
});

export default ContentCard;
