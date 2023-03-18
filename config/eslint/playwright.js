/** @type {import('eslint').Linter.Config} */
const config = {
  overrides: [
    {
      files: ['e2e/**/*.ts'],
      extends: ['plugin:playwright/playwright-test'],
    },
  ],
};

module.exports = config;
