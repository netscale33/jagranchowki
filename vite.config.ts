import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Relative base path ('./') ensures the build works on ANY domain, hosting, or subdirectory with ZERO 404 asset errors!
export default defineConfig({
  plugins: [react()],
  base: './',
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
