module.exports = {
  root: true,
  plugins: [
    'ember'
  ],
  parserOptions: {
    ecmaVersion: 8,
    sourceType: 'module'
  },
  extends: [
    'eslint:recommended',
    'plugin:ember/recommended'
  ],
  env: {
    node: true,
    browser: true,
    es6: true
  }
};
