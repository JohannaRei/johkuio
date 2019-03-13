// @flow
import React from 'react';
import { IoMdMenu, IoMdClose } from 'react-icons/io';

type Props = {
  name: string
};

const Icon = ({ name }: Props) => {
  switch (name) {
    case 'md-menu':
      return <IoMdMenu />;
    case 'md-close':
      return <IoMdClose />;
    default:
      return null;
  }
};

export default Icon;
