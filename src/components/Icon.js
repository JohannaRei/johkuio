// @flow
import React from 'react';
import { IoMdMenu, IoMdClose } from 'react-icons/io';

type Props = {
  name: string
};

// needed because of import bugs
const Icon = ({ name }: Props) => {
  switch (name) {
    case 'md-menu':
      return <IoMdMenu style={styles.icon} />;
    case 'md-close':
      return <IoMdClose style={styles.icon} />;
    default:
      return null;
  }
};

const styles = {
  icon: {
    height: '50px',
    width: '50px'
  }
};

export default Icon;
