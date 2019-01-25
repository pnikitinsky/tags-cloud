import React from 'react';
import App from './App';
import commonTestWrapper from 'src/utils/commonTestWrapper';

test('App should match snapshot', () => {
  const component = commonTestWrapper(
    <App/>
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
