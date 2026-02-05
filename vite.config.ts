// vite.config.ts
import path from 'path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  // final live URL: https://SwinburneLabourCalculator.github.io/
  base: '/',

  server: {
    port: 3000,
    host: '0.0.0.0',
  },

  plugins: [react()],

  // REMOVE env → it causes undefined references & blank page
  define: {},

  resolve: {
    alias: {
      '@': path.resolve(__dirname, '.'),
    },
  },
})
