import React from 'react';
import Header from './Header';
import commonTestWrapper from 'src/utils/commonTestWrapper';

test('Header should match snapshot', () => {
  const component = commonTestWrapper(
    <Header/>
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
