module.exports = {
  parser: '@typescript-eslint/parser',
  extends: ['plugin:@typescript-eslint/recommended', 'airbnb-base'],
  parserOptions: {
    ecmaVersion: 11,
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint'],
  rules: {
    'no-use-before-define': 'off',
    'no-unused-vars': 'off',
    'import/prefer-default-export': 'off',
    '@typescript-eslint/no-use-before-define': ['error'],
    'import/extensions': ['error', 'ignorePackages', { ts: 'never' }],
    'class-methods-use-this': ['off'],
    'arrow-body-style': ['off'],
    'no-restricted-syntax': ['off'],
    'lines-between-class-members': ['off'],
    'no-useless-constructor': ['off'],
    'no-empty-function': ['off'],
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
