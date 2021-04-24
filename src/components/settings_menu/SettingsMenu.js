import React, { useState, useRef } from "react";
import { slide as Menu } from 'react-burger-menu';
import "./SettingsMenu.css";

function SettingsMenu(props) {
  return (
    <Menu className="settings-menu" left noOverlay disableAutoFocus isOpen width={375}>
      <button onClick={props.handleUpdateClicked} className="wide-button">Update</button>
      <label style={{padding: "1em 0", borderBottom: "1px solid black"}}>
          θ:
          <input type="text" style={{marginLeft: "0.25em"}} value={props.degreeAngle} onChange={props.handleDegreeAngleChange} className="small-input" />
          ° ≈
          <input type="text" style={{marginLeft: "0.8em", marginRight: "0.25em"}} value={props.radianAngle} onChange={props.handleRadianAngleChange} className="medium-input" />
          rad
      </label>
      <label style={{paddingTop: "1em"}}>
          cos:
          <input type="text" style={{marginLeft: "0.25em", marginRight: "0.25em"}} value={props.trigValues.cos} className="medium-input" />
          <input id="cos-checkbox" type="checkbox" style={{marginRight: "1em"}} defaultChecked onChange={props.handleTrigSelectionChange} className="" />
          sin:
          <input type="text" style={{marginLeft: "0.25em", marginRight: "0.25em"}} value={props.trigValues.sin} className="medium-input" />
          <input id="sin-checkbox" type="checkbox" defaultChecked onChange={props.handleTrigSelectionChange} className="" />
      </label>
      <label style={{paddingTop: "1em"}}>
          tan:
          <input type="text" style={{marginLeft: "0.25em", marginRight: "0.25em"}} value={props.trigValues.tan} className="medium-input" />
          <input id="tan-checkbox" type="checkbox" style={{marginRight: "1em"}} defaultChecked onChange={props.handleTrigSelectionChange} className="" />
          cot:
          <input type="text" style={{marginLeft: "0.25em", marginRight: "0.25em"}} value={props.trigValues.cot} className="medium-input" />
          <input id="cot-checkbox" type="checkbox" defaultChecked onChange={props.handleTrigSelectionChange} className="" />
      </label>
      <label style={{paddingTop: "1em"}}>
          sec:
          <input type="text" style={{marginLeft: "0.25em", marginRight: "0.25em"}} value={props.trigValues.sec} className="medium-input" />
          <input id="sec-checkbox" type="checkbox" style={{marginRight: "1em"}} defaultChecked onChange={props.handleTrigSelectionChange} className="" />
          csc:
          <input type="text" style={{marginLeft: "0.25em", marginRight: "0.25em"}} value={props.trigValues.csc} className="medium-input" />
          <input id="csc-checkbox" type="checkbox" defaultChecked onChange={props.handleTrigSelectionChange} className="" />
      </label>
    </Menu>
  );
}

export default SettingsMenu;
