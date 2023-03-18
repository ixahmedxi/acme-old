/** @type {import('prettier').Options} */
const config = {
  semi: true,
  singleQuote: true,
  trailingComma: 'all',
  printWidth: 80,
  bracketSameLine: true,
  plugins: [
    require.resolve('@ianvs/prettier-plugin-sort-imports'),
    require.resolve('prettier-plugin-packagejson'),
    require.resolve('prettier-plugin-tailwindcss'),
  ],
  importOrder: [
    '^react',
    '<TYPES>',
    '<TYPES>^[./]',
    '<THIRD_PARTY_MODULES>',
    '',
    '^@acme/(.*)$',
    '',
    '^@/(.*)$',
    '^[./]',
  ],
  importOrderSeparation: false,
  importOrderSortSpecifiers: true,
  importOrderMergeDuplicateImports: true,
  pluginSearchDirs: false,
};

module.exports = config;
