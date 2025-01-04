import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      // Proxy for /api1/Register to Node server on port 3000
      '/Register': {
        target: 'http://localhost:3000',
        changeOrigin: true, // Change the origin of the host header to the target URL
        // rewrite: (path) => path.replace(/^\/api1\/Register/, '/api1/Register') // Optional: adjust path 
      },  
        
         },
  },
})
