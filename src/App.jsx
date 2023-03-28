import React from "react";
import ReactDOM from "react-dom";
import { Counter } from 'counter/Counter';
import { Counter as CounterTwo } from 'counterTwo/Counter';

import "./index.css";

const App = () => (
  <div className="container">
    <h1>Container App</h1>
    <Counter />
    <CounterTwo />
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
