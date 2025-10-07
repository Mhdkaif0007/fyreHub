import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
    base: '/FyreHub/',
  plugins: [react()],
  build: {
    outDir: '../docs', // Build to repo-root docs so GitHub Pages can serve it
    assetsDir: 'assets',
  },
})
