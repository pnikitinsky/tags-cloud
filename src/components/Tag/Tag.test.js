import React from 'react';
import Tag from './Tag';
import commonTestWrapper from 'src/utils/commonTestWrapper';

test('Tag should match snapshot', () => {
  const mockedProps = {
    match: {
      params: {
        tagId: '1751295897__D_B Presents'
      }
    },
  };

  const component = commonTestWrapper(
    <Tag {...mockedProps}/>
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
