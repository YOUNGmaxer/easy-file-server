import Koa from 'koa'
import type { Server } from 'node:http'
import serve from 'koa-static'
import { error, info } from './log'

const app = new Koa()
const port = 7777
let server: Server = null

const errorListener = {
  handler(err) {
    error(err)
  },
  listen() {
    app.on('error', errorListener.handler)
  },
  remove() {
    app.off('error', errorListener.handler)
  }
}

/**
 * 启动文件服务
 * @param dirPath 目录路径
 */
export function startFileServer(dirPath: string): void {
  if (server) {
    return error(`File server has been running as port ${port}`)
  }

  app.use(serve(dirPath))

  server = app.listen(port, () => {
    info(`File server is running at port ${port}`)
  })

  errorListener.listen()
}

/**
 * 关闭文件服务
 */
export function stopFileServer(): void {
  if (!server) {
    return error('No file server started')
  }

  server.close((err) => {
    err
      ? error('Close file server error', err)
      : info('File server is closed')
    server = null
  })
}
