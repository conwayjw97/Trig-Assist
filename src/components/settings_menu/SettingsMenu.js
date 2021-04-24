import React, { useState, useRef } from "react";
import { slide as Menu } from 'react-burger-menu';
import "./SettingsMenu.css";

function SettingsMenu(props) {
  return (
    <Menu className="settings-menu" left noOverlay disableAutoFocus isOpen width={375}>
      <button onClick={props.handleUpdateClicked} className="wide-button">Update</button>
      <label style={{marginTop: "1em"}}>
          Angle:
          <input type="text" style={{marginLeft: "0.25em"}} value={props.degreeAngle} onChange={props.handleDegreeAngleChange} className="small-input" />
          ° ≈
          <input type="text" style={{marginLeft: "0.8em", marginRight: "0.25em"}} value={props.radianAngle} onChange={props.handleRadianAngleChange} className="medium-input" />
          rad
      </label>
      <label style={{marginTop: "1em"}}>
          Cos:
          <input type="text" style={{marginLeft: "0.25em", marginRight: "0.25em"}} value="0" className="small-input" />
          <input type="checkbox" className="" />
      </label>
    </Menu>
  );
}

export default SettingsMenu;
