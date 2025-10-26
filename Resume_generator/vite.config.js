import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import autoprefixer from 'autoprefixer';
import tailwindcssPostcss from '@tailwindcss/postcss';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  css: {
    postcss: {
      plugins: [
        tailwindcssPostcss({ config: './tailwind.config.js' }), // Use @tailwindcss/postcss
        autoprefixer(), // Ensure browser compatibility
      ],
    },
  },
});