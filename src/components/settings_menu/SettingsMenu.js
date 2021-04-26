import React, { useState, useRef } from "react";
import { slide as Menu } from 'react-burger-menu';
import "../Menu.css";

function SettingsMenu(props) {
  return (
    <Menu noOverlay disableAutoFocus isOpen width={375}>
      <label className="centered large-print">
          Manual Input Angle Select
      </label>
      <label className="centered large-print underlined" style={{padding: "1em 0"}}>
          θ:
          <input type="text" style={{marginLeft: "0.25em"}} value={props.degreeAngle} onChange={props.handleDegreeAngleChange} className="small-input" />
          ° ≈
          <input type="text" style={{marginLeft: "0.8em", marginRight: "0.25em"}} value={props.radianAngle} onChange={props.handleRadianAngleChange} className="medium-input" />
          rad
      </label>

      <label className="centered large-print underlined" style={{padding: "1em 0"}}>
          Click & Hold Angle Select:
          <input id="hold-click-checkbox" type="checkbox" defaultChecked onChange={props.handleAngleSelectionChange} />
      </label>

      <label className="centered large-print underlined" style={{padding: "1em 0"}}>
          Angle Value:
          <select id="angle-value-dropdown" style={{marginLeft: "0.25em"}} onChange={props.handleAngleUnitChange}>
            <option value="degrees">Degrees</option>
            <option value="radians">Radians</option>
            <option value="none">None</option>
          </select>
      </label>

      <label className="centered large-print">
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

      <label className="centered large-print">
          Unit Circle Details
      </label>
      <label className="centered">
          Axes:
          <input id="axis-checkbox" type="checkbox" defaultChecked onChange={props.handleCircleDetailChange} />
          Degrees:
          <input id="degree-checkbox" type="checkbox" defaultChecked onChange={props.handleCircleDetailChange} />
      </label>
      <label className="centered">
          Radians:
          <input id="radian-checkbox" type="checkbox" defaultChecked onChange={props.handleCircleDetailChange} />
          Pi:
          <input id="pi-checkbox" type="checkbox" defaultChecked onChange={props.handleCircleDetailChange} />
      </label>
      <label className="centered underlined" style={{paddingBottom: "1em"}}>
          Quadrants:
          <input id="quadrant-checkbox" type="checkbox" defaultChecked onChange={props.handleCircleDetailChange} />
          Function Signs:
          <input id="sign-checkbox" type="checkbox" defaultChecked onChange={props.handleCircleDetailChange} />
      </label>
    </Menu>
  );
}

export default SettingsMenu;
