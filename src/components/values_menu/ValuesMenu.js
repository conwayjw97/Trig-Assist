import React, { useState, useRef } from "react";
import { slide as Menu } from 'react-burger-menu';
import "../Menu.css";

function ValuesMenu(props) {
  return (
    <Menu right noOverlay disableAutoFocus isOpen width={375}>
      <label className="centered">
          Trigonometric Function Values
      </label>
      <label className="centered">
          cos(θ) = {props.trigValues.cos}
      </label>
      <label className="centered">
          sin(θ) = {props.trigValues.sin}
      </label>
      <label className="centered">
          tan(θ) = {props.trigValues.tan}
      </label>
      <label className="centered">
          cot(θ) = {props.trigValues.cot}
      </label>
      <label className="centered">
          sec(θ) = {props.trigValues.sec}
      </label>
      <label className="centered">
          csc(θ) = {props.trigValues.csc}
      </label>
    </Menu>
  );
}

export default ValuesMenu;
