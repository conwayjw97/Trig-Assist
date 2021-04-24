import React, { useState } from 'react';
import Canvas from './components/canvas/Canvas.js';
import SettingsMenu from './components/settings_menu/SettingsMenu.js';
import './App.css';

import {
  degToRad,
  radToDeg
} from "./utils/angleCalc.js";

function App() {
  const [degreeAngle, setDegreeAngle] = useState(null);
  const [radianAngle, setRadianAngle] = useState(null);
  const [trigValues, setTrigValues] = useState({});
  const [updateCount, setUpdateCount] = useState(0);

  const handleDegreeAngleChange = (event) => {
    const input = event.target.value;
    if(parseInt(input) >= 0 && parseInt(input) <= 360){
      setDegreeAngle(input);
      setRadianAngle(degToRad(input).toFixed(5));
      setTrigValues({
        "cos": Math.cos(degToRad(input)).toFixed(5),
        "sin": Math.sin(degToRad(input)).toFixed(5),
        "tan": Math.tan(degToRad(input)).toFixed(5),
        "cot": Math.atan(degToRad(input)).toFixed(5),
        "sec": 1/Math.cos(degToRad(input)).toFixed(5),
        "csc": 1/Math.sin(degToRad(input)).toFixed(5),
      });
    }
    else{
      console.log("ANGLE OUT OF BOUNDS");
    }
  }

  const handleRadianAngleChange = (event) => {
    const input = event.target.value;
    setRadianAngle(input);
    setDegreeAngle(radToDeg(input).toFixed(0));
    setTrigValues({
      "cos": Math.cos(input).toFixed(5),
      "sin": Math.sin(input).toFixed(5),
      "tan": Math.tan(input).toFixed(5),
      "cot": Math.atan(input).toFixed(5),
      "sec": 1/Math.cos(input).toFixed(5),
      "csc": 1/Math.sin(input).toFixed(5),
    });
  }

  const handleUpdateClicked = (event) => {
    setUpdateCount(updateCount + 1);
  }

  return (
    <div className="App">
      <SettingsMenu
        degreeAngle={degreeAngle}
        radianAngle={radianAngle}
        handleDegreeAngleChange={handleDegreeAngleChange}
        handleRadianAngleChange={handleRadianAngleChange}
        handleUpdateClicked={handleUpdateClicked}
        trigValues={trigValues}
        />
      <Canvas radianAngle={radianAngle} updateCount={updateCount} />
    </div>
  );
}

export default App;
