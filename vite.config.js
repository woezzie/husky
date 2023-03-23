import html from '@rollup/plugin-html';
import sri from 'rollup-plugin-sri';
import { defineConfig } from 'vite';

// export default {
//   root: 'my-app',
//   plugins: {
//
//
//   }
// };

export default defineConfig({
  root: 'my-app',
  build: {
    outDir: 'dist',
    rollupOptions: {
      plugins: [html(), sri()]
    }
  }
});
