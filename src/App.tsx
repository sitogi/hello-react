import React, { Component } from "react";
import Hanebado from "./Hanebado";
import ClickCounter from "./ClickCounter";
import CountDownTimer from "./CountDownTimer";

import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="ui container three column grid segment">
        <Hanebado></Hanebado>
        <ClickCounter></ClickCounter>
        <CountDownTimer></CountDownTimer>
      </div>
    );
  }
}

export default App;
