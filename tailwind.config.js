/** @type {import('tailwindcss', 'tailwindcss-animate').Config} */
export const content = [];
export const theme = {
  extend: {},
};
export const plugins = [];


module.exports = {
  theme: {
    extend: {
      colors: {
        'success-100': '#49de50',
        'success-200': '#42c748',
        'destructive-100': '#f75353',
        'destructive-200': '#c44141',
        'primary-100': '#dddfff',
        'primary-200': '#cac5fe',
        'light-100': '#d6e0ff',
        'light-400': '#6870a6',
        'light-600': '#4f557d',
        'light-800': '#24273a',
        'dark-100': '#020408',
        'dark-200': '#27282f',
        'dark-300': '#242633',

        fontMonaSans: '"Mona Sans", sans-serif',
      
        // Add more colors here...
      },
      borderRadius: {
        sm: '0.625rem',
        // Add more radius here...
      },
    },
  },
};


module.exports = {
  plugins: [
    require('tailwindcss-animate')
  ],
};


module.exports = {
  darkMode: 'class', // or 'media'
};
