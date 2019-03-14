// @flow
import React, { Component } from 'react';
import { FlatList, StyleSheet } from 'react-native';
import ContentCard from './ContentCard';

type Props = {
  data: []
};

type Data = {
  item: Item
};

type Item = {
  title: string,
  id: string
};

class Content extends Component<Props> {
  _keyExtractor = (item: Item, index: number) => item.id;

  _renderItem = ({ item }: Data) => (
    <ContentCard id={item.id} title={item.title} backgroundColor={bgColor()} />
  );

  render() {
    const { data } = this.props;
    return (
      <FlatList
        data={data}
        renderItem={this._renderItem}
        style={styles.container}
      />
    );
  }
}

const bgColor = () => {
  const colors = ['salmon', 'lightskyblue', 'lightgreen'];
  return colors[Math.floor(Math.random() * colors.length)];
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: 'lightpink'
  }
});

export default Content;
