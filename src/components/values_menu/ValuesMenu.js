import React, { useState, useRef } from "react";
import { slide as Menu } from 'react-burger-menu';
import "../Menu.css";

function ValuesMenu(props) {
  return (
    <Menu right noOverlay disableAutoFocus isOpen width={375}>
    </Menu>
  );
}

export default ValuesMenu;
