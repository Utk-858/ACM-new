/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        slideInLeft: {
          '0%': {
            transform: 'translateX(-100%)',
            opacity: '0',
          },
          '100%': {
            transform: 'translateX(0%)',
            opacity: '1',
          },
        },
      },
      animation: {
        slideInLeft: 'slideInLeft 1s ease-out forwards', // Left-to-right animation
      },
      colors: {
        lightBlue: {
          300: '#85d7ff', // Light blue color
          500: '#1fb6ff', // Darker light blue for the gradient
        },
      },
    },
  },
  plugins: [],
};
