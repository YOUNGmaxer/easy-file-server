import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import electron from 'vite-plugin-electron'

export default defineConfig(() => {
  return {
    plugins: [
      vue(),
      electron({
        entry: 'electron/main.ts'
      })
    ]
  }
})
