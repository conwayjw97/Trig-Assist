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
  const [updateCount, setUpdateCount] = useState(0);

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

  const handleUpdateClicked = (event) => {
    setUpdateCount(updateCount + 1);
  }

  return (
    <div className="App">
      <SettingsMenu degreeAngle={degreeAngle} radianAngle={radianAngle} handleDegreeAngleChange={handleDegreeAngleChange} handleRadianAngleChange={handleRadianAngleChange} handleUpdateClicked={handleUpdateClicked}/>
      <Canvas radianAngle={radianAngle} updateCount={updateCount} />
    </div>
  );
}

export default App;
