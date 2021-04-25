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

  const handleTrigSelectionChange = (event) => {
    const newTrigVisible = trigVisible;
    switch(event.target.id){
      case "cos-checkbox":
        newTrigVisible.cos = !trigVisible.cos;
        break;
      case "sin-checkbox":
        newTrigVisible.sin = !trigVisible.sin;
        break;
      case "tan-checkbox":
        newTrigVisible.tan = !trigVisible.tan;
        break;
      case "cot-checkbox":
        newTrigVisible.cot = !trigVisible.cot;
        break;
      case "sec-checkbox":
        newTrigVisible.sec = !trigVisible.sec;
        break;
      case "csc-checkbox":
        newTrigVisible.csc = !trigVisible.csc;
        break;
    }
    setTrigVisible(newTrigVisible);
  }

  const handleCircleDetailChange = (event) => {
    console.log("AAAAAAA");
    const newCircleDetails = circleDetails;
    switch(event.target.id){
      case "axis-checkbox":
        newCircleDetails.axes = !circleDetails.axes;
        break;
      case "degree-checkbox":
        newCircleDetails.degrees = !circleDetails.degrees;
        break;
      case "radian-checkbox":
        newCircleDetails.radians = !circleDetails.radians;
        break;
      case "pi-checkbox":
        newCircleDetails.pi = !circleDetails.pi;
        break;
      case "quadrant-checkbox":
        newCircleDetails.quadrants = !circleDetails.quadrants;
        break;
    }
    setCircleDetails(newCircleDetails);
  }

  return (
    <div className="App">
      <SettingsMenu
        degreeAngle={degreeAngle}
        radianAngle={radianAngle}
        handleDegreeAngleChange={handleDegreeAngleChange}
        handleRadianAngleChange={handleRadianAngleChange}
        handleUpdateClicked={handleUpdateClicked}
        handleTrigSelectionChange={handleTrigSelectionChange}
        handleCircleDetailChange={handleCircleDetailChange}
        trigValues={trigValues}
        />
      <Canvas
        radianAngle={radianAngle}
        trigVisible={trigVisible}
        circleDetails={circleDetails}
        updateCount={updateCount}
        />
    </div>
  );
}

export default App;
