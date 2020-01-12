import React, { Component } from "react";
import { Button, Card, Statistic } from "semantic-ui-react";

import "./App.css";

// Local State を定義しておく
interface AppState {
  count: number;
}

class ClickCounter extends Component<{}, AppState> {
  // 1 つ目が Props で、 2 つ目が Local State
  constructor(props: {}) {
    super(props);
    this.state = { count: 0 }; // Local State の初期化が必要
  }

  // State の更新は必ず this.setState を使う
  increment = () => this.setState(prevState => ({ count: prevState.count + 1 }));

  // setState の引数は、 以下のいずれか
  // 1. 設定したい値の State オブジェクト
  // 2. (prevState, props) => newState 形式の、State と Props を受け取って新しい State を返す関数
  decrement = () => this.setState(prevState => ({ count: prevState.count - 1 }));

  render() {
    const { count } = this.state;

    return (
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
              <Button color="red" onClick={this.decrement}>
                -1
              </Button>
              <Button color="green" onClick={this.increment}>
                +1
              </Button>
            </div>
          </Card.Content>
        </Card>
      </div>
    );
  }
}

export default ClickCounter;
