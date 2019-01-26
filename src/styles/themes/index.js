import { main } from './main';
import { custom } from './custom';
import * as deepmerge from 'deepmerge';
import { getThemeFromUrl } from 'src/utils/theme';

const themesList = {
  custom: custom,
};

export const createTheme = () => {
  const theme = getThemeFromUrl();
  if(themesList[theme]) {
    let expectedTheme = themesList[theme];
    return deepmerge(main, expectedTheme);
  }

  return main;
};
