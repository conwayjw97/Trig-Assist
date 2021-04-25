import React, { useState, useRef } from "react";
import { slide as Menu } from 'react-burger-menu';
import "./SettingsMenu.css";

function SettingsMenu(props) {
  return (
    <Menu className="settings-menu" left noOverlay disableAutoFocus isOpen width={375}>
      <button onClick={props.handleUpdateClicked} className="wide-button">Update</button>
      <label style={{padding: "1em 0", borderBottom: "1px solid black", textAlign: "center"}}>
          θ:
          <input type="text" style={{marginLeft: "0.25em"}} value={props.degreeAngle} onChange={props.handleDegreeAngleChange} className="small-input" />
          ° ≈
          <input type="text" style={{marginLeft: "0.8em", marginRight: "0.25em"}} value={props.radianAngle} onChange={props.handleRadianAngleChange} className="medium-input" />
          rad
      </label>
      <label style={{paddingTop: "1em", textAlign: "center"}}>
          Trigonometric Functions
      </label>
      <label style={{paddingTop: "1em", textAlign: "center"}}>
          cos:
          <input id="cos-checkbox" type="checkbox" style={{marginRight: "1em"}} defaultChecked onChange={props.handleTrigSelectionChange} className="" />
          sin:
          <input id="sin-checkbox" type="checkbox" style={{marginRight: "1em"}} defaultChecked onChange={props.handleTrigSelectionChange} className="" />
          tan:
          <input id="tan-checkbox" type="checkbox" style={{marginRight: "1em"}} defaultChecked onChange={props.handleTrigSelectionChange} className="" />
      </label>
      <label style={{paddingTop: "1em", paddingBottom: "1em", borderBottom: "1px solid black", textAlign: "center"}}>
          cot:
          <input id="cot-checkbox" type="checkbox" style={{marginRight: "1em"}} defaultChecked onChange={props.handleTrigSelectionChange} className="" />
          sec:
          <input id="sec-checkbox" type="checkbox" style={{marginRight: "1em"}} defaultChecked onChange={props.handleTrigSelectionChange} className="" />
          csc:
          <input id="csc-checkbox" type="checkbox" style={{marginRight: "1em"}} defaultChecked onChange={props.handleTrigSelectionChange} className="" />
      </label>
      <label style={{paddingTop: "1em", textAlign: "center"}}>
          Unit Circle Details
      </label>
      <label style={{paddingTop: "1em", textAlign: "center"}}>
          Axes:
          <input id="axis-checkbox" type="checkbox" style={{marginRight: "1em"}} defaultChecked onChange={props.handleCircleDetailChange} className="" />
          Degrees:
          <input id="degree-checkbox" type="checkbox" style={{marginRight: "1em"}} defaultChecked onChange={props.handleCircleDetailChange} className="" />
          Radians:
          <input id="radian-checkbox" type="checkbox" style={{marginRight: "1em"}} defaultChecked onChange={props.handleCircleDetailChange} className="" />
      </label>
      <label style={{paddingTop: "1em", paddingBottom: "1em", borderBottom: "1px solid black", textAlign: "center"}}>
          Pi:
          <input id="pi-checkbox" type="checkbox" style={{marginRight: "1em"}} defaultChecked onChange={props.handleCircleDetailChange} className="" />
          Quadrants:
          <input id="quadrant-checkbox" type="checkbox" style={{marginRight: "1em"}} defaultChecked onChange={props.handleCircleDetailChange} className="" />
      </label>
    </Menu>
  );
}

export default SettingsMenu;
