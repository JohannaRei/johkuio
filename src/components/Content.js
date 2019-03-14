// @flow
import React, { Component } from 'react';
import { FlatList, Text } from 'react-native';
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
    <ContentCard id={item.id} title={item.title} />
  );

  render() {
    const { data } = this.props;
    return <FlatList data={data} renderItem={this._renderItem} />;
  }
}

export default Content;
