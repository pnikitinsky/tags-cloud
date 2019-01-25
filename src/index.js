import React from "react";
import ReactDOM from "react-dom";
import { Component as App } from "./screens/App/index";
import { Provider } from 'react-redux';
import store from 'src/state';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
