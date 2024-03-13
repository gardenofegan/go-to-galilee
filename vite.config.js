import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  base: '/go-to-galilee/',
  build: {
    outDir: './docs'
  },
  server: {
    port: 8080
  }
})
