import React, { FC } from "react";
import { Button, Divider, Icon } from "semantic-ui-react";
import Helment from "react-helmet";
import { RouteComponentProps, withRouter } from "react-router";

import Counter from "./containers/Counter";
import ColorfulBeads from "./containers/ColofulBeads";
import "./App.css";

type AppProps = {} & RouteComponentProps;

const ClickCounter: FC<AppProps> = ({ history }) => {
  return (
    <div className="container">
      <Helment>
        <title>Counter</title>
      </Helment>
      <Counter></Counter>
      <ColorfulBeads></ColorfulBeads>
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
