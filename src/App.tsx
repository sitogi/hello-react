import React, { FC } from "react";
import Hanebado from "./Hanebado";
import ClickCounter from "./ClickCounter";
import CountDownTimerContainer from "./containers/CountDownTimer";

import "./App.css";

const App: FC = () => (
  <div className="ui container three column grid segment">
    <Hanebado></Hanebado>
    <ClickCounter></ClickCounter>
    <CountDownTimerContainer></CountDownTimerContainer>
  </div>
);

export default App;
