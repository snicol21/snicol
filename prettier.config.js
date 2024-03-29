module.exports = {
  printWidth: 160,
  tabWidth: 2,
  useTabs: false,
  semi: true,
  singleQuote: true,
  jsxSingleQuote: true,
  trailingComma: 'es5',
  bracketSpacing: true,
  arrowParens: 'always',
  plugins: [require('prettier-plugin-tailwindcss')],
  printWidth: 120,
  overrides: [
    {
      files: '*.mdx',
      options: {
        printWidth: 80,
        proseWrap: 'always',
      },
    },
  ],
};
