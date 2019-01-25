import { handleActions } from 'redux-actions';
import { fetchTags } from 'src/utils/tags';

const defaultState = {
  list: fetchTags(),
};

export default handleActions(
  {},
  defaultState,
);
