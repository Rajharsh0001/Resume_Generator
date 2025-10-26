import { defineConfig } from 'tailwindcss';

export default defineConfig({
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1E40AF', // Blue-800
        secondary: '#6B7280', // Gray-500
        accent: '#3B82F6', // Blue-500
      },
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
      },
    },
  },
  plugins: [],
});