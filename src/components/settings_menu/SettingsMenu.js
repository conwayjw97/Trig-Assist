import React, { useState, useRef } from "react";
import { slide as Menu } from 'react-burger-menu';
import "../Menu.css";

function SettingsMenu(props) {
  return (
    <Menu className="settings-menu" left noOverlay disableAutoFocus isOpen width={375}>
      <button onClick={props.handleUpdateClicked} className="wide-button">Update</button>
      <label className="centered underlined" style={{padding: "1em 0"}}>
          θ:
          <input type="text" style={{marginLeft: "0.25em"}} value={props.degreeAngle} onChange={props.handleDegreeAngleChange} className="small-input" />
          ° ≈
          <input type="text" style={{marginLeft: "0.8em", marginRight: "0.25em"}} value={props.radianAngle} onChange={props.handleRadianAngleChange} className="medium-input" />
          rad
      </label>
      <label className="centered underlined" style={{padding: "1em 0"}}>
          Click and Hold Angle Selection:
          <input id="hold-click-checkbox" type="checkbox" defaultChecked onChange={props.handleTrigSelectionChange} />
      </label>
      <label className="centered">
          Trigonometric Functions
      </label>
      <label className="centered">
          cos:
          <input id="cos-checkbox" type="checkbox" defaultChecked onChange={props.handleTrigSelectionChange} />
          sin:
          <input id="sin-checkbox" type="checkbox" defaultChecked onChange={props.handleTrigSelectionChange} />
          tan:
          <input id="tan-checkbox" type="checkbox" defaultChecked onChange={props.handleTrigSelectionChange} />
      </label>
      <label className="centered underlined" style={{paddingTop: "1em", paddingBottom: "1em"}}>
          cot:
          <input id="cot-checkbox" type="checkbox" defaultChecked onChange={props.handleTrigSelectionChange} />
          sec:
          <input id="sec-checkbox" type="checkbox" defaultChecked onChange={props.handleTrigSelectionChange} />
          csc:
          <input id="csc-checkbox" type="checkbox" defaultChecked onChange={props.handleTrigSelectionChange} />
      </label>
      <label className="centered">
          Unit Circle Details
      </label>
      <label className="centered">
          Axes:
          <input id="axis-checkbox" type="checkbox" defaultChecked onChange={props.handleCircleDetailChange} />
          Degrees:
          <input id="degree-checkbox" type="checkbox" defaultChecked onChange={props.handleCircleDetailChange} />
          Radians:
          <input id="radian-checkbox" type="checkbox" defaultChecked onChange={props.handleCircleDetailChange} />
      </label>
      <label className="centered underlined"style={{paddingBottom: "1em"}}>
          Pi:
          <input id="pi-checkbox" type="checkbox" defaultChecked onChange={props.handleCircleDetailChange} />
          Quadrants:
          <input id="quadrant-checkbox" type="checkbox" defaultChecked onChange={props.handleCircleDetailChange} />
      </label>
    </Menu>
  );
}

export default SettingsMenu;
