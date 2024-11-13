// tailwind.config.js
module.exports = {
  content: [
    './public/*.html',   // Path to HTML files
    './src/**/*.{html,js}', // Path to src folder files (including subfolders)
  ],
  theme: {
    extend: {},
  },
  plugins: [require("@tailwindcss/forms")],
}


