import React, { FC } from "react";
import CharacterList, { Character } from "./CharacterList";
import Helment from "react-helmet";
import { RouteComponentProps, withRouter } from "react-router";
import { Button, Divider, Icon } from "semantic-ui-react";

import "./App.css";

// もともと持っていた Props 要素と RouteComponentProps を合成することで、withRouter() を適用する受け皿を作っておく。
type CharacterProps = {} & RouteComponentProps;

const Hanebado: FC<CharacterProps> = ({ history }) => {
  const characters: Character[] = [
    {
      id: 1,
      name: " 羽咲 綾乃 ",
      age: 16,
      height: 151
    },
    {
      id: 2,
      name: " 荒垣 なぎさ ",
      age: 18,
      height: 174
    },
    {
      id: 3,
      name: " 泉 理子 ",
      age: 18
    }
  ];

  return (
    <>
      <Helment>
        <title>Hanebado Character List</title>
      </Helment>
      <div className="container">
        <header>
          <h1>はねバド!キャラクター一覧</h1>
        </header>
        <CharacterList school="北小町高校" characters={characters} />
      </div>

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
    </>
  );
};

export default withRouter(Hanebado);
