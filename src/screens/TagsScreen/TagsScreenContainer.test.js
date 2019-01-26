import { mapStateToProps } from './TagsScreenContainer';

describe('TagsScreenContainer', () => {

  it('should derive props from Redux state', () => {
    const state = {
      tags: {
        list: []
      }
    };
    const props = mapStateToProps(state);

    expect(props).toMatchObject({
      // exampleProp: expectedValue
    });
  });
});
