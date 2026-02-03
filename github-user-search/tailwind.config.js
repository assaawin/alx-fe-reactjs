/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        github: {
          dark: '#0d1117',
          'dark-border': '#30363d',
          'dark-card': '#161b22',
          'dark-text': '#c9d1d9',
          'dark-muted': '#8b949e',
          blue: '#58a6ff',
          green: '#238636',
          'green-hover': '#2ea043',
          red: '#f85149',
        }
      },
    },
  },
  plugins: [],
}
