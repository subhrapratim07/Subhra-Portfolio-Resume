import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 4000, // Use a port number that Render can detect
    host: '0.0.0.0', // Listen on all network interfaces
  }
})

