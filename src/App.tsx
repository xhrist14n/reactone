import React from 'react';
import logo from './logo.svg';
import './App.css';

import RunningFox from "./components/RunningFox";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Codigo de prueba en React
        </p>

        <img src={logo} alt="Mi logo" width={200} />
        
        <p>
          <RunningFox />
        </p>
        
      </header>
    </div>
  );
}

export default App;
