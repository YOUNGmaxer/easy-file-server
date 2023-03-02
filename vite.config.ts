import { defineConfig, UserConfigExport } from 'vite'
import vue from '@vitejs/plugin-vue'
import electron from 'vite-plugin-electron'
import WindiCSS from 'vite-plugin-windicss'

const electronViteConfig: UserConfigExport = {
  resolve: {
    alias: {
      '@': __dirname
    }
  },
  build: {
    sourcemap: true,
    minify: false,
    outDir: 'dist-electron',
  }
}

export default defineConfig(() => {
  return {
    plugins: [
      vue(),
      WindiCSS(),
      electron([
        {
          entry: 'electron/main.ts',
          vite: electronViteConfig,
          // onstart 无行为则不会自动启动 app
          onstart() {}
        },
        {
          entry: 'electron/preload.ts',
          vite: electronViteConfig,
          onstart(options) {
            options.reload()
          }
        }
      ]),
    ]
  }
})
