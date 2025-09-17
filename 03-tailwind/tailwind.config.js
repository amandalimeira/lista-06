/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        bg: {
          light: '#f9f9fb',
          dark: '#18181b',
        },
        text: {
          light: '#18181b',
          dark: '#f9f9fb',
        },
        primary: {
          light: '#2563eb',
          dark: '#60a5fa',
        },
        card: {
          light: '#fff',
          dark: '#23232a',
        },
        border: {
          light: '#e5e7eb',
          dark: '#33334a',
        },
        tagPromo: '#f59e42',
        rating: '#fbbf24',
      },
      borderRadius: {
        DEFAULT: '12px',
      },
      boxShadow: {
        card: '0 2px 8px rgba(0,0,0,0.08)',
        cardDark: '0 2px 8px rgba(0,0,0,0.32)',
      },
      transitionTimingFunction: {
        custom: 'cubic-bezier(.4,0,.2,1)',
      },
    },
    screens: {
      'xs': '0px',
      'sm': '481px',
      'md': '769px',
      'lg': '1025px',
    },
  },
  plugins: [],
}

