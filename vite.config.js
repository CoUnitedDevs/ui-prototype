import { defineConfig } from 'vite'
import vue from '@vitejs/vue'
import { fileURLToPath, URL } from 'node:url'

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
  },
  // Add this line specifically for your Org/Repo structure:
  base: process.env.NODE_ENV === 'production' ? '/ui-prototype/' : '/',
})