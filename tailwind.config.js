/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'brand': {
          'bg': '#0D1117',
          'card': '#161B22',
          'text': '#E6EDF3',
          'accent': '#00FFEE',
          'secondary': '#1F6FEB',
          'border': '#30363D',
          'text-secondary': '#8B949E',
        },
      },
      backgroundColor: {
        'brand-bg': '#0D1117',
        'brand-card': '#161B22',
      },
      textColor: {
        'brand-text': '#E6EDF3',
        'brand-accent': '#00BFA6',
        'brand-secondary': '#1F6FEB',
        'brand-text-secondary': '#8B949E',
      },
      borderColor: {
        'brand-border': '#30363D',
      },
    },
  },
  plugins: [],
};
