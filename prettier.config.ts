import { type Config } from 'prettier';

const config: Config = {
    plugins: ['prettier-plugin-tailwindcss'],
    semi: true,
    arrowParens: 'always',
    bracketSameLine: true,
    bracketSpacing: true,
    singleQuote: true,
    jsxSingleQuote: true,
    tabWidth: 2,
    useTabs: false,
    singleAttributePerLine: true,
    trailingComma: 'es5',
};

export default config;