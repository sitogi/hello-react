import React, { Component } from "react";
import { Button, Card, Icon, Statistic } from "semantic-ui-react";

import "./App.css";

const LIMIT = 60;

// Local State を定義しておく
interface AppState {
  timeLeft: number;
}

class CountDownTimer extends Component<{}, AppState> {
  // 1 つ目が Props で、 2 つ目が Local State
  constructor(props: {}) {
    super(props);
    this.state = { timeLeft: LIMIT }; // Local State の初期化が必要
  }

  // State の更新は必ず this.setState を使う
  tick = () => this.setState(prevState => ({ timeLeft: prevState.timeLeft - 1 }));

  // setState の引数は、 以下のいずれか
  // 1. 設定したい値の State オブジェクト
  // 2. (prevState, props) => newState 形式の、State と Props を受け取って新しい State を返す関数
  reset = () => this.setState(prevState => ({ timeLeft: LIMIT }));

  timerId?: NodeJS.Timer;

  componentDidMount = () => {
    this.timerId = setInterval(this.tick, 1000);
  };

  componentDidUpdate = () => {
    const { timeLeft } = this.state;
    if (timeLeft === 0) {
      this.reset();
    }
  };

  componentWillUnmount = () => {
    clearInterval(this.timerId as NodeJS.Timer);
  };

  render() {
    const { timeLeft } = this.state;

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
            <Button color="red" fluid onClick={this.reset}>
              <Icon name="redo"></Icon>
              Reset
            </Button>
          </Card.Content>
        </Card>
      </div>
    );
  }
}

export default CountDownTimer;
