import queryString from 'query-string';

export function getThemeFromUrl() {
  return queryString.parse(window.location.search).theme;
}
