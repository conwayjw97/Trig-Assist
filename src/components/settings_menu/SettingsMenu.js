import React, { useState, useRef } from "react";
import { slide as Menu } from 'react-burger-menu';
import "./SettingsMenu.css";

import {
  degToRad,
  radToDeg
} from "../../utils/angleCalc.js";

function SettingsMenu() {
  const [degreeAngle, setDegreeAngle] = useState(0);
  const [radianAngle, setRadianAngle] = useState(0);

  const handleDegreeAngleChange = (event) => {
    const input = event.target.value;
    if(parseInt(input) >= 0 && parseInt(input) <= 360){
      setDegreeAngle(input);
      setRadianAngle(degToRad(input).toFixed(5));
    }
    else{
      console.log("ANGLE OUT OF BOUNDS");
    }
  }

  const handleRadianAngleChange = (event) => {
    const input = event.target.value;
    setRadianAngle(input);
    setDegreeAngle(radToDeg(input).toFixed(0));
  }

  return (
    <Menu className="settings-menu" left noOverlay disableAutoFocus isOpen width={375}>
      <label>
          Angle:
          <input type="text" style={{marginLeft: "0.25em"}} value={degreeAngle} onChange={handleDegreeAngleChange} className="small-input" />
          ° ≈
          <input type="text" style={{marginLeft: "0.8em", marginRight: "0.25em"}} value={radianAngle} onChange={handleRadianAngleChange} className="medium-input" />
          rad
      </label>
    </Menu>
  );
}

export default SettingsMenu;
