import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    allowedHosts: ['0da4-2620-8d-8000-e018-d5b3-c927-8570-b0aa.ngrok-free.app'], // 👈 add this line
  }
})
