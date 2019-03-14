// @flow
import React from 'react';
import IoIcon from 'react-native-vector-icons/Ionicons';

type Props = {
  name: string
};

const Icon = ({ name }: Props) => <IoIcon name={name} size={30} />;

export default Icon;
