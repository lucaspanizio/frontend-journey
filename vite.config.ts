import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0',
    port: 4000,
  },
  resolve: {
    alias: [{ find: '@', replacement: path.resolve(__dirname, 'src') }],
  },
  build: {
    outDir: 'dist',
    rollupOptions: {
      output: {
        chunkFileNames: '[name].[hash].js',
        assetFileNames: 'assets/[name].[ext]',
        entryFileNames: '[name].[hash].js',
        manualChunks(id) {
          const reactLibs = ['react', 'react-dom', 'react-router'];
          if (reactLibs.some((lib) => id.includes(`node_modules/${lib}`))) {
            return 'vendor/react';
          }

          if (id.includes('node_modules')) {
            return 'vendor/chunk';
          }

          if (id.includes('src/pages')) {
            const parts = id.split('src/pages/')[1].split('/');
            const pageName = parts[0];
            return `pages/${pageName}`;
          }

          if (id.includes('src/components/')) {
            const parts = id.split('src/components/')[1].split('/'); // atoms, molecules, organisms...
            const componentName = parts[parts.length - 2]; // Box, Flex, Card ...
            return `components/${componentName}`;
          }

          return null; // Outros arquivos não precisam de chunk separado
        },
      },
    },
  },
});
