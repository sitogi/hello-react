import React, { FC } from "react";
import { Redirect, Route, Switch } from "react-router";

import Home from "./components/Home";
import Hanebado from "./Hanebado";
import ClickCounter from "./ClickCounter";
import CountDownTimerContainer from "./containers/CountDownTimer";

import "./App.css";

const App: FC = () => (
  <div className="ui container segment">
    <Switch>
      <Route path="/hanebado" component={Hanebado} />
      <Route path="/counter" component={ClickCounter} />
      <Route path="/timer" component={CountDownTimerContainer} />
      <Route path="/" component={Home} />
      <Redirect to="/" />;
    </Switch>
  </div>
);

export default App;
