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
          Angle Unit:
          <select id="angle-value-dropdown" style={{marginLeft: "0.25em"}} onChange={props.handleAngleUnitChange}>
            <option value="degrees">Degrees</option>
            <option value="radians">Radians</option>
            <option value="none">None</option>
          </select>
      </label>

      <label className="centered large-print">
          Trigonometric Functions
      </label>
      <div className="centered" style={{whitespace: "nowrap"}}>
        <label>
          cos:
          <input id="cos-checkbox" type="checkbox" defaultChecked onChange={props.handleTrigSelectionChange} />
        </label>
        <label>
          sin:
          <input id="sin-checkbox" type="checkbox" defaultChecked onChange={props.handleTrigSelectionChange} />
        </label>
        <label>
          tan:
          <input id="tan-checkbox" type="checkbox" defaultChecked onChange={props.handleTrigSelectionChange} />
        </label>
      </div>
      <div className="centered underlined" style={{whitespace: "nowrap", padding: "1em"}}>
        <label>
          cot:
          <input id="cot-checkbox" type="checkbox" defaultChecked onChange={props.handleTrigSelectionChange} />
        </label>
        <label>
          sec:
          <input id="sec-checkbox" type="checkbox" defaultChecked onChange={props.handleTrigSelectionChange} />
        </label>
        <label>
          csc:
          <input id="csc-checkbox" type="checkbox" defaultChecked onChange={props.handleTrigSelectionChange} />
        </label>
      </div>

      <label className="centered large-print">
          Unit Circle Details
      </label>
      <div className="centered" style={{whitespace: "nowrap"}}>
        <label>
          Axes:
          <input id="axis-checkbox" type="checkbox" defaultChecked onChange={props.handleCircleDetailChange} />
        </label>
        <label>
          Degrees:
          <input id="degree-checkbox" type="checkbox" defaultChecked onChange={props.handleCircleDetailChange} />
        </label>
      </div>
      <div className="centered" style={{whitespace: "nowrap"}}>
        <label>
          Radians:
          <input id="radian-checkbox" type="checkbox" defaultChecked onChange={props.handleCircleDetailChange} />
        </label>
        <label>
          Pi:
          <input id="pi-checkbox" type="checkbox" defaultChecked onChange={props.handleCircleDetailChange} />
        </label>
      </div>
      <div className="centered underlined" style={{whitespace: "nowrap", paddingBottom: "1em"}}>
        <label>
          Quadrants:
          <input id="quadrant-checkbox" type="checkbox" defaultChecked onChange={props.handleCircleDetailChange} />
        </label>
        <label>
          Function Signs:
          <input id="sign-checkbox" type="checkbox" defaultChecked onChange={props.handleCircleDetailChange} />
        </label>
      </div>
    </Menu>
  );
}

export default SettingsMenu;
