import React, { FC } from "react";
import Helmet from "react-helmet";
import { Link } from "react-router-dom";
import { Container, List } from "semantic-ui-react";

import "../App.css";

interface AppProps {
  timeLeft: number;
  reset: () => void;
}

const Home: FC<{}> = () => (
  <>
    <Helmet>
      <title>React Practice by TypeScript</title>
    </Helmet>
    <header>
      <h1>React Practice by TypeScript</h1>
    </header>
    <Container className="summary">
      <p>りあクト！による React と TypeScript の練習ページです。</p>
    </Container>
    <h2>成果物</h2>
    <List as="ul">
      <List.Item as="li">
        <Link to={"/hanebado"}>はねばどキャラクター一覧</Link>
      </List.Item>
      <List.Item as="li">
        <Link to={"/counter"}>カウントアプリ</Link>
      </List.Item>
      <List.Item as="li">
        <Link to={"/timer"}>カウントダウンタイマー</Link>
      </List.Item>
    </List>
  </>
);

export default Home;
