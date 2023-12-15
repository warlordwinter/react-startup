import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/signup': {
        target: 'http://localhost:4000',
        changeOrigin: true,
      },
      '/login': {
        target: 'http://localhost:4000',
        changeOrigin: true,
      },
      '/upload-pdf': {
        target: 'http://localhost:4000',
        changeOrigin: true,
      },
      '/get-pdf': {
        target: 'http://localhost:4000',
        changeOrigin: true,
      },
    }
  }
})
