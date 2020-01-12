import React, { FC } from "react";
import { Button, Card, Divider, Icon, Statistic } from "semantic-ui-react";
import Helment from "react-helmet";
import { RouteComponentProps, withRouter } from "react-router";

import "../App.css";

// もともと持っていた Props 要素と RouteComponentProps を合成することで、withRouter() を適用する受け皿を作っておく。
type AppProps = { timeLeft: number; reset: () => void } & RouteComponentProps;

const CountDownTimerComponent: FC<AppProps> = ({ timeLeft, reset, history }) => (
  <div className="container">
    <Helment>
      <title>CountDownTimer</title>
    </Helment>
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
    <Divider hidden />
    <Button
      basic
      color="grey"
      onClick={() => {
        history.push("/");
      }}
    >
      <Icon name="home" />
      ホームへ
    </Button>
  </div>
);

export default withRouter(CountDownTimerComponent);
