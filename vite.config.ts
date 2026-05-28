import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import vitePluginSvgr from "@herob191/vite-plugin-svgr";
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), vitePluginSvgr()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, './src'),
      "@shared": path.resolve(__dirname, './src/shared'),
      "@styles": path.resolve(__dirname, './src/shared/styles'),
      "@pages": path.resolve(__dirname, './src/pages'),
    }
  }
})
