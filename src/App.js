import React from "react";

import logo from "./logo-color@2x.png";
import "./App.scss";
import Calculator from "./Calculator.js";

export function App() {
  return (
    <div className="app">
      <header className="app-header">
        <img src={logo} className="app-logo" alt="logo" />
        <p className="app-edit-note">
          Edit <code>src/App.js</code> and save to auto-reload.
        </p>
      </header>

      <div className="app-solution">
        <Calculator></Calculator>
      </div>
    </div>
  );
}
