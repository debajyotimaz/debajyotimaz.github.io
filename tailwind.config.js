/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    '.app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'class', // Enable dark mode using the 'dark' class
  theme: {
    extend: {
      animation: {
        borderPulse: 'borderPulse 1.5s infinite ease-in-out',
      },
      colors: {
        primary: 'var(--primary-color)',
        secondary: 'var(--secondary-color)',
        accent: 'var(--accent-color)',
      },
    },
  },
  plugins: [],
};