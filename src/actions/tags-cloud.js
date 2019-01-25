export const FETCH_TAGS = 'FETCH_TAGS';

export const fetchTags = tags => ({
  type: FETCH_TAGS,
  payload: tags,
});
