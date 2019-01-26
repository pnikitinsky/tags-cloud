export const FETCH_TAGS = 'FETCH_TAGS';

export const fetchTags = tagsList => ({
  type: FETCH_TAGS,
  payload: tagsList,
});
