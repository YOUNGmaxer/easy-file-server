import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import electron from 'vite-plugin-electron'
import WindiCSS from 'vite-plugin-windicss'

export default defineConfig(() => {
  return {
    plugins: [
      vue(),
      WindiCSS(),
      electron([
        {
          entry: 'electron/main.ts',
          vite: {
            build: {
              sourcemap: true,
              minify: false,
              outDir: 'dist-electron',
            }
          },
          // onstart 无行为则不会自动启动 app
          onstart() {}
        },
        {
          entry: 'electron/preload/index.ts',
          vite: {
            build: {
              sourcemap: true,
              minify: false,
              outDir: 'dist-electron/preload',
              
            }
          },
          onstart(options) {
            options.reload()
          }
        }
      ]),
    ],
  }
})
