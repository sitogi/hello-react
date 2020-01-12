import React, { FC } from "react";
import { Button, Card, Icon, Statistic } from "semantic-ui-react";

import "../App.css";

interface AppProps {
  timeLeft: number;
  reset: () => void;
}

const CountDownTimerComponent: FC<AppProps> = ({ timeLeft, reset }) => (
  <div className="container">
    <header>
      <h1>Timer</h1>
    </header>
    <Card>
      <Statistic className="number-board" color="teal">
        <Statistic.Label>TIME</Statistic.Label>
        <Statistic.Value>{timeLeft}</Statistic.Value>
      </Statistic>
      <Card.Content>
        <Button color="red" fluid onClick={reset}>
          <Icon name="redo"></Icon>
          Reset
        </Button>
      </Card.Content>
    </Card>
  </div>
);

export default CountDownTimerComponent;
