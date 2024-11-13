import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      'https://datasage.netlify.app/': {
        target: 'https://us-central1-projeto-arch-lambda-439723.cloudfunctions.net/function-1',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^https:\/\/datasage\.netlify\.app/, '')
      }
    },
    host: true
  }
})
