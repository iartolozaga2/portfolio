/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/**/*.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    fontSize: {
      body: '2vw',
      header: '3vw',
    },
    backgroundImage: {
      inigo: "url('multimedia/inigo.jpg')",
    },
  },
  plugins: [],
};
