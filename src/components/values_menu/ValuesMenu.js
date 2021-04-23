import React from 'react';
import { slide as Menu } from 'react-burger-menu';
import "./ValuesMenu.css";

export default () => {
  return (
    <Menu className='values-menu' right noOverlay isOpen width={375}>
    </Menu>
  );
}
