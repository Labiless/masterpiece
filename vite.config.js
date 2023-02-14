import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  define: {
    colors:{
      gold: "#FFA800",
      darkGrey: "#16181B",
      grey: "#667080"
    }
  },
  css: {
    preprocessorOptions: {
      less: {
        additionalData: `@import "@/assets/global.less";`
      }
    }
  },
})
