import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: './', // Dosya yollarının başına './' ekleyerek Netlify'ın dosyaları bulmasını sağlar.
})