import React, { useState, useEffect } from 'react';
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
  const [angleUnit, setAngleUnit] = useState("degrees");
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
    "signs": true,
  });
  const [updateCount, setUpdateCount] = useState(0);

  useEffect(() => {
    document.title = "Trig Assist"
  }, []);

  const updateTrigValues = (radians) => {
    setTrigValues({
      "cos": Math.cos(radians).toFixed(5),
      "sin": Math.sin(radians).toFixed(5),
      "tan": Math.tan(radians).toFixed(5),
      "cot": (1/Math.tan(radians)).toFixed(5),
      "sec": (1/Math.cos(radians)).toFixed(5),
      "csc": (1/Math.sin(radians)).toFixed(5),
    });
  }

  const handleDegreeAngleChange = (event) => {
    const input = event.target.value;
    if(parseInt(input) >= 0 && parseInt(input) <= 360){
      setDegreeAngle(input);
      setRadianAngle(degToRad(input).toFixed(5));
      updateTrigValues(degToRad(input));
    }
    else{
      console.log("ANGLE OUT OF BOUNDS");
    }
    setUpdateCount(updateCount + 1);
  }

  const handleRadianAngleChange = (event) => {
    const input = event.target.value;
    setRadianAngle(input);
    setDegreeAngle(radToDeg(input).toFixed(0));
    updateTrigValues(input);
    setUpdateCount(updateCount + 1);
  }

  const handleGraphRadianChange = (radians) => {
    setRadianAngle(radians);
    setDegreeAngle(radToDeg(radians).toFixed(0));
    updateTrigValues(radians);
  }

  const handleAngleSelectionChange = (event) => {
    setAngleSelect(event.target.checked);
    setUpdateCount(updateCount + 1);
  }

  const handleAngleUnitChange = (event) => {
    switch(event.target.value){
      case "degrees":
        setAngleUnit("degrees");
        break;
      case "radians":
        setAngleUnit("radians");
        break;
      case "none":
        setAngleUnit("none");
        break;
    }
    setUpdateCount(updateCount + 1);
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
    setUpdateCount(updateCount + 1);
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
      case "sign-checkbox":
        newCircleDetails.signs = event.target.checked;
        break;
    }
    setCircleDetails(newCircleDetails);
    setUpdateCount(updateCount + 1);
  }

  return (
    <div className="App">
      <div className="settings-menu">
        <SettingsMenu
          degreeAngle={degreeAngle}
          radianAngle={radianAngle}
          trigValues={trigValues}
          handleDegreeAngleChange={handleDegreeAngleChange}
          handleRadianAngleChange={handleRadianAngleChange}
          handleAngleSelectionChange={handleAngleSelectionChange}
          handleAngleUnitChange={handleAngleUnitChange}
          handleTrigSelectionChange={handleTrigSelectionChange}
          handleCircleDetailChange={handleCircleDetailChange}
          />
      </div>
      <div className="values-menu">
        <ValuesMenu
          radianAngle={radianAngle}
          trigValues={trigValues}
          />
      </div>
      <Canvas
        radianAngle={radianAngle}
        angleSelect={angleSelect}
        angleUnit={angleUnit}
        trigVisible={trigVisible}
        circleDetails={circleDetails}
        handleGraphRadianChange={handleGraphRadianChange}
        updateCount={updateCount}
        />
    </div>
  );
}

export default App;
