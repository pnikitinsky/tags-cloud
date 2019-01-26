import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';
import { Provider } from 'react-redux';
import { createTheme } from './styles/themes';
import { Component as App } from './screens/App/index';
import store from 'src/state';

ReactDOM.render(
  <Provider store={store}>
    <ThemeProvider theme={createTheme()}>
      <App />
    </ThemeProvider>
  </Provider>,
  document.getElementById('root')
);
