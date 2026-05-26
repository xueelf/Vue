import { type Config } from 'prettier';

export default {
  tabWidth: 2,
  semi: true,
  endOfLine: 'lf',
  singleQuote: true,
  printWidth: 100,
  vueIndentScriptAndStyle: true,
  plugins: ['prettier-plugin-sort'],
  importOrderTypeImports: 'inline-first',
} satisfies Config;
