import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import electron from 'vite-plugin-electron'
import renderer from 'vite-plugin-electron-renderer'

export default defineConfig(() => {
  return {
    plugins: [
      vue(),
      electron({
        entry: 'electron/main.ts',
        onstart(options) {
          options.startup()
        }
      }),
      // Use Node.js API in the Renderer-process
      renderer({
        nodeIntegration: true,
      }),
    ]
  }
})
