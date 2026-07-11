import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/palatine-advisory-group/',
  server: {
    open: true,
  },
})