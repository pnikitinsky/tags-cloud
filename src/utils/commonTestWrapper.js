import React from 'react';
import renderer from 'react-test-renderer';
import reducers from 'src/reducers';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { createTheme } from 'src/styles/themes';

const store = createStore(
  reducers,
);

const commonTestWrapper = (children) => {
  return renderer.create(
    <Provider store={store}>
      <MemoryRouter>
        <ThemeProvider theme={createTheme()}>
          {children}
        </ThemeProvider>
      </MemoryRouter>
    </Provider>
  );
};

export default commonTestWrapper;
