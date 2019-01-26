import { handleActions } from 'redux-actions';
import { fetchTags } from 'src/utils/tags';
import { FETCH_TAGS } from  'src/actions/tag-cloud';

const defaultState = {
  list: fetchTags(),
};

export default handleActions(
  {
    [FETCH_TAGS]: (state, action) => ({
      ...state,
      list: action.payload,
    }),
  },
  defaultState,
);
