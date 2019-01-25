import { handleActions } from 'redux-actions';
import { FETCH_TAG } from 'src/actions/tags-cloud';

const defaultState = {
  list: [],
};

export default handleActions(
  {
    [FETCH_TAG]: (state, action) => ({
      ...state,
      ...action.payload,
    }),
  },
  defaultState,
);
