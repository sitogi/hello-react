import React, { FC } from "react";
import Hanebado from "./Hanebado";
import ClickCounter from "./ClickCounter";
import CountDownTimer from "./CountDownTimer";

import "./App.css";

const App: FC = () => (
  <div className="ui container three column grid segment">
    <Hanebado></Hanebado>
    <ClickCounter></ClickCounter>
    <CountDownTimer></CountDownTimer>
  </div>
);

export default App;
