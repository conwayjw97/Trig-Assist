import React from 'react';
import { slide as Menu } from 'react-burger-menu';
import "./SettingsMenu.css";

export default () => {
  return (
    <Menu className='settings-menu' left noOverlay isOpen width={375}>
    </Menu>
  );
}
