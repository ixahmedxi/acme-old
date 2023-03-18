// @ts-check

/** @type {import('eslint').Linter.Config} */
const config = {
  extends: ['acme/react', 'acme/next'],
  overrides: [
    {
      files: ['**/*.ts', '**/*.tsx'],
      parserOptions: {
        tsconfigRootDir: __dirname,
        project: ['./tsconfig.eslint.json'],
      },
      settings: {
        'import/resolver': {
          typescript: {
            project: ['./tsconfig.eslint.json'],
          },
          node: {
            extensions: ['.js', '.jsx', '.ts', '.tsx'],
            project: ['./tsconfig.eslint.json'],
          },
        },
      },
    },
  ],
  parserOptions: {
    babelOptions: {
      presets: [require.resolve('next/babel')],
    },
  },
  settings: {
    next: {
      rootDir: 'apps/web',
    },
  },
};

module.exports = config;
