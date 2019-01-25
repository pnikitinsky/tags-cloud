import React from "react";
import ReactDOM from "react-dom";
import logger, { createLogger } from 'redux-logger';
import { Component as App } from "./screens/App/index";
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';
import reducers from './reducers'
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';

const dev = process.env.NODE_ENV !== 'production';
const devMiddleware = [createLogger(), reduxImmutableStateInvariant()];

const store = createStore(
  reducers,
  applyMiddleware(
    logger,
    ...(dev ? devMiddleware : [])
  )
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
