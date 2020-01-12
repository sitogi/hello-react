import React, { FC, useState, useEffect } from "react";
import { Button, Card, Icon, Statistic } from "semantic-ui-react";

import "./App.css";

const LIMIT = 60;

const CountDownTimer: FC = () => {
  const [timeLeft, setTimeLeft] = useState(LIMIT);

  const tick = () => setTimeLeft(prevTime => (prevTime === 0 ? LIMIT : prevTime - 1));
  const reset = () => setTimeLeft(LIMIT);

  // Efect Hook。第一引数は引数なしの関数、第二引数は配列を渡す。
  useEffect(() => {
    const timerId = setInterval(tick, 1000); // componentDidMount()

    return () => clearInterval(timerId); // componentWillUnmount()
  }, []); // 第二引数で渡した配列の値が前回と変更されていれば、 setInterval が呼ばれる。
  // 今回はからの配列を渡しているので、 setInterval は初回しか呼ばれない。

  return (
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
};

export default CountDownTimer;
