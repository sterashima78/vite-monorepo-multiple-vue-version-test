import { defineConfig } from 'vite';
import vue from 'vue3/plugin';
import vue2 from 'vue2/plugin';

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue(), vue2()],
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: {
        a: 'index.html',
        b: 'b.html',
      },
    },
  },
  resolve: {
    preserveSymlinks: true
  }
});