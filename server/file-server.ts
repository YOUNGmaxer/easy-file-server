import Koa from 'koa'
import type { Server } from 'node:http'
import serve from 'koa-static'
import { error, info } from './log'
import { FileServerStartResult, FileServerStopResult } from '@/types/file-server'

const app = new Koa()
const port = 7777
let server: Server = null

type ErrorHandler = (error) => void;

const errorListener = {
  handler(err) {
    error(err)
    // 出错时认为服务启动异常，server 置为空
    server = null
  },
  listen(handler?: ErrorHandler) {
    app.off('error', handler ? handler : errorListener.handler)
    app.on('error', handler ? handler : errorListener.handler)
  },
}

/**
 * 启动文件服务
 * @param dirPath 目录路径
 */
export function startFileServer(dirPath: string): FileServerStartResult {
  return new Promise((resolve) => {
    if (server) {
      const errorMessage = `File server has been running as port ${port}`
      error(errorMessage)
      return resolve({
        isRunning: true,
        error: new Error(errorMessage)
      })
    }
  
    app.use(serve(dirPath))
    errorListener.listen((error) => resolve({ isRunning: false, error }))
  
    server = app.listen(port, () => {
      info(`File server is running at port ${port}`)
      resolve({ isRunning: true })
    })
  });
}

/**
 * 关闭文件服务
 */
export function stopFileServer(): FileServerStopResult {
  return new Promise((resolve, reject) => {
    if (!server) {
      const errorMessage = 'No file server started'
      error(errorMessage)
      return resolve({
        isStopped: true,
        error: new Error(errorMessage)
      })
    }
  
    server.close((err) => {
      if (err) {
        error('Close file server error', err)
        resolve({ isStopped: false, error: err })
      } else {
        server = null
        info('File server is closed')
        resolve({ isStopped: true })
      }
    })
  });
}

/** 服务是否处于启动状态 */
export function checkIsRunning(): boolean {
  return !!server
}
