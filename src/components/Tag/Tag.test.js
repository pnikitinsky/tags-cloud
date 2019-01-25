import React from 'react';
import Tag from './Tag';
import commonTestWrapper from 'src/utils/commonTestWrapper';

test('Tag should match snapshot', () => {
  const component = commonTestWrapper(
    <Tag/>
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
