/** @type {import('eslint').Linter.Config} */
const config = {
  root: true,
  extends: ['acme/base'],
  overrides: [
    {
      files: ['**/*.ts', '**/*.tsx'],
      parserOptions: {
        tsconfigRootDir: __dirname,
        project: [
          './tsconfig.eslint.json',
          './apps/*/tsconfig.eslint.json',
          './config/*/tsconfig.json',
          './packages/*/tsconfig.json',
        ],
      },
      settings: {
        'import/resolver': {
          typescript: {
            project: [
              './tsconfig.eslint.json',
              './apps/*/tsconfig.json',
              './config/*/tsconfig.json',
              './packages/*/tsconfig.json',
            ],
          },
          node: {
            extensions: ['.js', '.jsx', '.ts', '.tsx'],
            project: [
              './tsconfig.eslint.json',
              './apps/*/tsconfig.json',
              './config/*/tsconfig.json',
              './packages/*/tsconfig.json',
            ],
          },
        },
      },
    },
  ],
};

module.exports = config;
