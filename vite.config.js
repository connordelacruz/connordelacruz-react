import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig(({command, mode}) => {
  return {
    base: mode === 'production' ? "/connordelacruz-react" : "./",
    plugins: [react()],
    server: {
      open: true,
    },
  }
})
