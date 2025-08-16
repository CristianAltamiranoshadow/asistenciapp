/// <reference types="vitest" />

import legacy from '@vitejs/plugin-legacy'
import react from '@vitejs/plugin-react'
import { defineConfig, loadEnv } from 'vite'

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')
  const isCap = env.BUILD_TARGET === 'cap'

  // Tu backend del login en dev (cámbialo si usas otro puerto/url)
  const BACKEND_URL = env.VITE_BACKEND_URL || 'http://localhost:3000'

  return {
    plugins: [react(), legacy()],

    server: {
      proxy: {
        
        '/api': {
          target: BACKEND_URL,
          changeOrigin: true,
          secure: false,
          
        },

        '^/ika': {
          target: 'https://puce.estudioika.com',
          changeOrigin: true,
          secure: false,
          rewrite: (path) => path.replace(/^\/ika/, '/api'),
        },
      },
    },

    base: isCap ? './' : '/',

    test: {
      globals: true,
      environment: 'jsdom',
      setupFiles: './src/setupTests.ts',
    },
  }
})
