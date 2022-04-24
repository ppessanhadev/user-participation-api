module.exports = {
  env: {
    browser: true,
    es2020: true,
    node: true,
  },
  extends: ['plugin:@typescript-eslint/recommended', 'airbnb-base', 'prettier'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 11,
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint'],
  rules: {
    'no-use-before-define': 'off',
    'import/prefer-default-export': 'off',
    '@typescript-eslint/no-use-before-define': ['error'],
    'import/extensions': ['error', 'ignorePackages', { ts: 'never' }],
    'class-methods-use-this': ['off'],
    'arrow-body-style': ['off'],
    'no-restricted-syntax': ['off'],
    semi: [2, 'never'],
    quotes: [2, 'single', 'avoid-escape'],
    camelcase: ['off'],
  },
  settings: {
    'import/resolver': {
      typescript: {},
    },
  },
}
