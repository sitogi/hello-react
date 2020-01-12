import React, { FC, useState } from "react";
import { Button, Card, Divider, Icon, Statistic } from "semantic-ui-react";
import Helment from "react-helmet";
import { RouteComponentProps, withRouter } from "react-router";

import "./App.css";

type AppProps = {} & RouteComponentProps;

const ClickCounter: FC<AppProps> = ({ history }) => {
  // State Hook。CC の Local State に相当するものを FC で使えるようにする機能
  // useState は state 変数とそのセッター関数を返す
  // const と setCount の名前は自由に変更できる
  const [count, setCount] = useState(0); // 引数の 0 は初期値

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);

  return (
    <div className="container">
      <Helment>
        <title>Counter</title>
      </Helment>
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
};

export default withRouter(ClickCounter);
