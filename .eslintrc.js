const path = require('path');

module.exports = {
  extends: ['airbnb', 'plugin:jsx-a11y/strict', 'prettier'],
  env: {
    browser: true,
  },
  ignorePatterns: ['public/*', 'src/Arduino/arduino-base', 'src/html.js'],
  rules: {
    'import/no-extraneous-dependencies': 'off',
    // The SMM team doesn't write React code in .jsx files exclusively, as is suggested in the
    // Airbnb guide, so override this rule to allow .js files.
    'react/jsx-filename-extension': [
      1,
      {
        extensions: ['.js', '.jsx'],
      },
    ],
    'linebreak-style': 0,
  },
  settings: {
    'import/resolver': {
      alias: {
        map: [
          ['@components', path.resolve(__dirname, './src/components')],
          ['@styles', path.resolve(__dirname, './src/styles')],
          ['@content', path.resolve(__dirname, './src/content')],
          ['@context', path.resolve(__dirname, './src/context')],
          ['@utils', path.resolve(__dirname, './src/utils')],
        ],
        extensions: ['.ts', '.js', '.jsx', '.json'],
      },
    },
  },
};
