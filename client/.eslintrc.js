module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    'react/prop-types': 0,
    semi: [2, 'never'],
    quotes: ['error', 'single'],
    'eol-last': 0,
    'react/jsx-filename-extension': [1, {
      extensions: ['.js', '.jsx'],
    }],
  },
  ignorePatterns: ['*.html'],
}