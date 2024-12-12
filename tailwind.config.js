/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        slide: 'slide 20s linear infinite reverse',
      },
      keyframes: {
        slide: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(50%)' },
        },
      },
    },
  },
  plugins: [],
};
