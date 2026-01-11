import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  base: '/wilson-huang-portfolio/', 
  plugins: [react(), tailwindcss()],
})