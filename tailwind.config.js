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
        navy: {
          700: '#1a365d',
          800: '#153e75',
          900: '#1e3a8a',
        }
      }
    },
  },
  plugins: [],
};
