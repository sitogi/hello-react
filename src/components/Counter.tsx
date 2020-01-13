import React, { FC } from "react";
import { Button, Card, Statistic } from "semantic-ui-react";
import { RouteComponentProps, withRouter } from "react-router";

import "../App.css";

export interface CounterProps {
  count?: number;
  add?: (amount: number) => void;
  decrement?: () => void;
  increment?: () => void;
}

const Counter: FC<CounterProps & RouteComponentProps> = ({
  count = 0,
  add = () => {},
  decrement = () => {},
  increment = () => {}
}) => (
  <div className="container">
    <header>
      <h1>Counter</h1>
    </header>
    <Card>
      <Statistic className="number-board" color="teal">
        <Statistic.Label>count</Statistic.Label>
        <Statistic.Value>{count}</Statistic.Value>
      </Statistic>
      <Card.Content>
        <div className="ui two buttons">
          <Button color="red" onClick={decrement}>
            -1
          </Button>
          <Button color="green" onClick={increment}>
            +1
          </Button>
        </div>
        <div className="fluid-button">
          <Button fluid color="grey" onClick={() => add(10)}>
            +10
          </Button>
        </div>
      </Card.Content>
    </Card>
  </div>
);

export default withRouter(Counter);
