import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";

import App from "./App";
import counterReducer, { initialState } from "./reducer";
import * as serviceWorker from "./serviceWorker";

import "./index.css";
import "semantic-ui-css/semantic.min.css";

// Reducer 関数と State の初期値を createStore に渡して Store を作る
const store = createStore(counterReducer, initialState);

// Redux を使う場合は DOM のトップレベルで入れ子にしておく
ReactDOM.render(
  <BrowserRouter>
    {/* <Provider> に Props として Store を渡すと、下層のコンポーネントで Store にアクセスできるようになる */}
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
