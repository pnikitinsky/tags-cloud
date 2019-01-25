import React from 'react';
import TagsScreen from './TagsScreen';
import commonTestWrapper from 'src/utils/commonTestWrapper';

test('TagsScreen should match snapshot', () => {
  const component = commonTestWrapper(
    <TagsScreen/>
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
