// vite.config.js
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path' // Import path module


export default defineConfig({
  plugins: [vue()],
  base: './', // This will generate relative paths in the built index.html
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'), // Define "@" as an alias to "src"
    },
  },
})
