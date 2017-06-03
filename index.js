module.exports = {

  extends: [
    'airbnb',
    'standard',
    'plugin:flowtype/recommended',
  ],

  parser: 'babel-eslint',

  plugins: [
    'flowtype',
  ],

  rules: {

    'import/no-extraneous-dependencies': ['error', {
      devDependencies: true,
    }],
    'import/extensions': ['error', {
      js: 'never',
      jsx: 'never',
    }],
    'import/no-duplicates': ['error', 'always'],
    'no-duplicate-imports': 0, // handled by import/no-duplicates

    'quote-props': ['error', 'as-needed', { numbers: true }],

    'react/jsx-filename-extension': [0],
    'react/require-extension': [0],
    'react/prefer-stateless-function': ['error', { ignorePureComponents: true }],

    strict: 0,
    'arrow-body-style': ['error', 'always'],
    'arrow-parens': ['error', 'always'],
    'brace-style': ['error', 'stroustrup'],
    'comma-dangle': ['error', 'always-multiline'],
    'max-len': ['error', {
      code: 80,
      tabWidth: 2,
      ignoreStrings: true,
      ignoreTemplateLiterals: true,
      ignoreUrls: true,
    }],
    'operator-linebreak': ['error', 'before'],
    'no-multiple-empty-lines': ['error', {
      max: 2,
      maxEOF: 0,
    }],
    'no-underscore-dangle': [0],
    'padded-blocks': ['error', 'always'],

  },

  settings: {
    flowtype: {
      onlyFilesWithFlowAnnotation: false,
    },
  },

  env: {
    jest: true,
  },

}
