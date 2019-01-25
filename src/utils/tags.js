import store from 'src/state';

export function fetchTags() {
  const tagsData = require('src/data/tags');

  let tagsWithRequiredData = [];

  for (const tag of tagsData) {
    const desiredTag = {};

    desiredTag.label = tag.label;
    desiredTag.id = tag.id;
    desiredTag.totalMentions = tag.volume;
    desiredTag.negativeMentions = tag.sentiment.negative;
    desiredTag.positiveMentions = tag.sentiment.positive;
    desiredTag.neutralMentions = tag.sentiment.neutral;
    desiredTag.pageTypes = tag.pageType;
    tagsWithRequiredData.push(desiredTag);
  }

  return tagsWithRequiredData;
}

export function getDesiredTag(id) {
  const state = store.getState();
  const tags = state.tags.list;

  return tags.filter((tag) => (tag.id === id))[0]
}
