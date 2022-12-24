const tailwindcss = require('tailwindcss');
const autoprefixer = require('autoprefixer');
const postcssSystemUiFont = require('postcss-font-family-system-ui');

const config = {
  plugins: [
    //Some plugins, like tailwindcss/nesting, need to run before Tailwind,
    postcssSystemUiFont(),
    tailwindcss(),
    //But others, like autoprefixer, need to run after,
    autoprefixer,
  ],
};

module.exports = config;
