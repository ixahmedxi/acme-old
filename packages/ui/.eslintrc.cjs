// @ts-check

/** @type {import('eslint').Linter.Config} */
const config = {
  extends: ['acme/react', 'acme/storybook', 'acme/vitest'],
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
};

module.exports = config;
