import React, { useEffect, useState } from "react";
import logo from './logo.svg';
import './App.css';
import Routes from './routes/Routes';
import checkEvents from './utils/checkEvents';

function App() {

  useEffect(() => {
    checkEvents();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <Routes />
      </header>
    </div>
  );
}

export default App;
