import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

export default defineConfig({
  plugins: [react()],
  base: '/todolist/', // 1. Фиксим базовый путь
  build: {
    outDir: 'dist',
    emptyOutDir: true, // 2. Очищаем папку перед сборкой
    assetsDir: 'assets',
    rollupOptions: {
      output: {
        assetFileNames: 'assets/[name]-[hash][extname]',
        entryFileNames: 'assets/[name]-[hash].js',
        chunkFileNames: 'assets/[name]-[hash].js' // 3. Добавляем для чанков
      }
    }
  },
  server: {
    port: 5173
  }
})