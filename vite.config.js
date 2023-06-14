import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/deutsch-c1-quiz-vier/',
  plugins: [react()],
})
