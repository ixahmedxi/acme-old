// @ts-check

/** @type {import('eslint').Linter.Config} */
const config = {
  extends: ['acme/react', 'acme/storybook', 'acme/vitest'],
  overrides: [
    {
      files: ['**/*.ts', '**/*.tsx'],
      parserOptions: {
        tsconfigRootDir: __dirname,
        project: ['./tsconfig.json'],
      },
      settings: {
        'import/resolver': {
          typescript: {
            project: ['./tsconfig.json'],
          },
          node: {
            extensions: ['.js', '.jsx', '.ts', '.tsx'],
            project: ['./tsconfig.json'],
          },
        },
      },
    },
  ],
};

module.exports = config;
