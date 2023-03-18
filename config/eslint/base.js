/** @type {import('eslint').Linter.Config} */
const config = {
  ignorePatterns: ['node_modules', 'dist', 'coverage', 'tmp', 'pnpm-lock.yaml'],
  env: {
    es2022: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:eslint-comments/recommended',
    'plugin:regexp/recommended',
    'plugin:prettier/recommended',
  ],
  overrides: [
    {
      files: ['**/*.md'],
      processor: 'markdown/markdown',
      extends: ['plugin:markdown/recommended'],
      parserOptions: {
        extraFileExtensions: ['.md'],
      },
    },
    {
      files: ['**/*.ts', '**/*.tsx'],
      parser: '@typescript-eslint/parser',
      extends: ['plugin:@typescript-eslint/recommended'],
    },
    {
      files: ['**/*.ts', '**/*.tsx'],
      extends: [
        'plugin:@typescript-eslint/recommended-requiring-type-checking',
        'plugin:@typescript-eslint/strict',
      ],
      excludedFiles: ['**/*.md/*.ts', '**/*.md/*.tsx', '**/*.json'],
      parser: '@typescript-eslint/parser',
      rules: {
        'deprecation/deprecation': 'error',
        '@typescript-eslint/dot-notation': 'off',
      },
    },
    {
      files: ['**/src/**/*.ts', '**/src/**/*.tsx'],
      extends: ['plugin:import/recommended', 'plugin:import/typescript'],
      rules: {
        'import/no-extraneous-dependencies': 'error',
      },
      settings: {
        'import/resolver': {
          node: {
            extensions: ['.js', '.jsx', '.ts', '.tsx'],
          },
        },
      },
    },
    {
      files: ['*.json', '*.jsonc'],
      excludedFiles: ['package.json'],
      parser: 'jsonc-eslint-parser',
      parserOptions: {
        extraFileExtensions: ['.jsonc', '.json5', '.json'],
      },
      rules: {
        'jsonc/sort-keys': 'error',
      },
      extends: ['plugin:jsonc/recommended-with-json'],
    },
    {
      files: ['**/*.{yml,yaml}'],
      parser: 'yaml-eslint-parser',
      parserOptions: {
        extraFileExtensions: ['.yml', '.yaml'],
      },
      extends: ['plugin:yml/recommended', 'plugin:yml/prettier'],
      rules: {
        'yml/sort-keys': [
          'error',
          {
            order: { type: 'asc' },
            pathPattern: '^.*$',
          },
        ],
        'yml/sort-sequence-values': [
          'error',
          {
            order: { type: 'asc' },
            pathPattern: '^.*$',
          },
        ],
      },
    },
  ],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'deprecation'],
};

module.exports = config;
