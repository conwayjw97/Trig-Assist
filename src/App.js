import React from 'react';
import Canvas from './components/canvas/Canvas.js';
import SettingsMenu from './components/settings_menu/SettingsMenu.js';
import './App.css';

function App() {
  return (
    <div className="App">
      <SettingsMenu />
      <Canvas />
    </div>
  );
}

export default App;
