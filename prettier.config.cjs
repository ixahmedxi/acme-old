// @ts-check
/** @type {import('prettier').Options} */
const config = {
  semi: true,
  singleQuote: true,
  trailingComma: 'all',
  printWidth: 80,
  bracketSameLine: true,
  plugins: [
    require.resolve('prettier-plugin-organize-imports'),
    require.resolve('prettier-plugin-tailwindcss'),
  ],
  pluginSearchDirs: false,
};

module.exports = config;
