import React, { useState } from 'react';
import Canvas from './components/canvas/Canvas.js';
import SettingsMenu from './components/settings_menu/SettingsMenu.js';
import ValuesMenu from './components/values_menu/ValuesMenu.js';
import './App.css';

import {
  degToRad,
  radToDeg
} from "./utils/angleCalc.js";

function App() {
  const [degreeAngle, setDegreeAngle] = useState(null);
  const [radianAngle, setRadianAngle] = useState(null);
  const [trigValues, setTrigValues] = useState({});
  const [angleSelect, setAngleSelect] = useState(true);
  const [trigVisible, setTrigVisible] = useState({
    "cos": true,
    "sin": true,
    "tan": true,
    "cot": true,
    "sec": true,
    "csc": true,
  });
  const [circleDetails, setCircleDetails] = useState({
    "axes": true,
    "degrees": true,
    "radians": true,
    "pi": true,
    "quadrants": true,
  });
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

  const handleAngleSelectionChange = (event) => {
    setAngleSelect(event.target.checked);
  }

  const handleTrigSelectionChange = (event) => {
    const newTrigVisible = trigVisible;
    switch(event.target.id){
      case "cos-checkbox":
        newTrigVisible.cos = event.target.checked;
        break;
      case "sin-checkbox":
        newTrigVisible.sin = event.target.checked;
        break;
      case "tan-checkbox":
        newTrigVisible.tan = event.target.checked;
        break;
      case "cot-checkbox":
        newTrigVisible.cot = event.target.checked;
        break;
      case "sec-checkbox":
        newTrigVisible.sec = event.target.checked;
        break;
      case "csc-checkbox":
        newTrigVisible.csc = event.target.checked;
        break;
    }
    setTrigVisible(newTrigVisible);
  }

  const handleCircleDetailChange = (event) => {
    const newCircleDetails = circleDetails;
    switch(event.target.id){
      case "axis-checkbox":
        newCircleDetails.axes = event.target.checked;
        break;
      case "degree-checkbox":
        newCircleDetails.degrees = event.target.checked;
        break;
      case "radian-checkbox":
        newCircleDetails.radians = event.target.checked;
        break;
      case "pi-checkbox":
        newCircleDetails.pi = event.target.checked;
        break;
      case "quadrant-checkbox":
        newCircleDetails.quadrants = event.target.checked;
        break;
    }
    setCircleDetails(newCircleDetails);
  }

  return (
    <div className="App">
      <div className="settings-menu"> 
        <SettingsMenu
          degreeAngle={degreeAngle}
          radianAngle={radianAngle}
          handleDegreeAngleChange={handleDegreeAngleChange}
          handleRadianAngleChange={handleRadianAngleChange}
          handleUpdateClicked={handleUpdateClicked}
          handleAngleSelectionChange={handleAngleSelectionChange}
          handleTrigSelectionChange={handleTrigSelectionChange}
          handleCircleDetailChange={handleCircleDetailChange}
          trigValues={trigValues}
          />
      </div>
      <div className="values-menu">
        <ValuesMenu
          radianAngle={radianAngle}
          handleUpdateClicked={handleUpdateClicked}
          />
      </div>
      <Canvas
        radianAngle={radianAngle}
        angleSelect={angleSelect}
        trigVisible={trigVisible}
        circleDetails={circleDetails}
        updateCount={updateCount}
        />
    </div>
  );
}

export default App;
