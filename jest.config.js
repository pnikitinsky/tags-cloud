const path = require('path');

module.exports = {
  testURL: 'http://localhost',
  verbose: true,
  moduleDirectories: [
    path.join(__dirname, 'node_modules'),
    path.join(__dirname, 'src'),
  ],
  moduleNameMapper: {
    '^src(.*)$': path.join(__dirname, 'src', '$1'),
  },
  transform: {
    '^.+\\.js$': 'babel-jest',
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': path.join(__dirname, 'fileTransformer.js'),
  },
  moduleFileExtensions: [
    'js',
    'json',
  ],
  testPathIgnorePatterns: [
    path.join(__dirname, 'node_modules'),
    path.join(__dirname, 'blueprints'),
  ],
};
