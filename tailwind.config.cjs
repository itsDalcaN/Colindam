const config = {
  content: ['./src/**/*.{html,js,svelte,ts}'],

  theme: {
    extend: {},
  },

  plugins: [require('@tailwindcss/typography'), require('daisyui')],

  daisyui: {
    themes: ['dracula'],
  },
};

module.exports = config;
