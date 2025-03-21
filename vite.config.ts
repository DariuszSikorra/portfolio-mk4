import { defineConfig } from 'vite'
import path from 'path';
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@/': path.resolve(__dirname, 'src') + '/',
      'components': path.resolve(__dirname, 'src/components'),
      'routes': path.resolve(__dirname, 'src/routes'),
      'helpers': path.resolve(__dirname, 'src/helpers'),
    },
  },
  base: "https://www.dsikorra.net/"
})
