module.exports = {
  "parser": "babel-eslint",
  "parserOptions": {
    "ecmaVersion": 6,
    "sourceType": "module",
    "ecmaFeatures": {
      "jsx": true,
      "modules": true,
      "experimentalObjectRestSpread": true
    }
  },
  "plugins": [
    "react",
    'jest',
  ],
  "env": {
    "amd": true,
    'jest': true,
  },
  "extends": ["eslint:recommended", "plugin:react/recommended"],
  "rules": {
    "react/jsx-uses-vars": 1,
    "react/display-name": 1,
    "no-unused-vars": "warn",
    "no-unexpected-multiline": "warn",
    'no-console': 'off',
    indent: ['error', 2],
    quotes: ['error', 'single'],
    'quote-props': ['error', 'as-needed', { keywords: true }],
    'comma-dangle': ['error', 'always-multiline'],
    'space-in-parens': ['error', 'never'],
    'object-curly-spacing': ['error', 'always'],
    'array-bracket-spacing': ['error', 'never'],
    'computed-property-spacing': ['error', 'never'],
    // NOTE: This is some dependency issue workaround
    'jsx-a11y/href-no-hash': [0],
  },
  "settings": {
    "react": {
      "pragma": "React",
      "version": "15.6.1"
    }
  },
  "overrides": [
    {
      "files": ["*"],
      "rules": {
        "semi": "off",
        "no-unused-vars": "off",
        "no-undef": "off",
      }
    }
  ]
};
