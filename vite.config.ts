import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

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
  base: '/',
  build: {
    outDir: 'dist',
    target: 'es2020',
    rollupOptions: {
      output: {
        entryFileNames: '[name].[hash].js',
        chunkFileNames: '[name].[hash].js',
        assetFileNames: '[name].[ext]',
        manualChunks(id) {
          if (id.includes('node_modules')) {
            return 'vendor/libs'
          }

          if (id.includes('src/pages')) {
            const parts = id.split('src/pages/')[1].split('/')
            const pageName = parts[0]
            return `pages/${pageName}`
          }

          if (id.includes('src/components/')) {
            const parts = id.split('src/components/')[1].split('/')
            const componentName = parts[parts.length - 2]
            const componentCategory = parts[0]

            return `components/${componentCategory}/${componentName}`
          }

          return null
        },
      },
    },
  },
})
