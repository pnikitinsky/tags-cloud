import { createLogger } from 'redux-logger';
import logger from 'redux-logger';
import { apiMiddleware } from 'redux-api-middleware';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';
import { createStore, applyMiddleware } from 'redux';
import reducers from 'src/reducers'

const dev = process.env.NODE_ENV !== 'production';
const devMiddleware = [createLogger(), reduxImmutableStateInvariant()];
const middleWares = [logger, apiMiddleware, ...(dev ? devMiddleware : [])];

export default createStore(
  reducers,
  applyMiddleware(...middleWares)
);
