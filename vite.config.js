import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: './',   // dùng relative path → hoạt động cả custom domain lẫn username.github.io/repo
})
