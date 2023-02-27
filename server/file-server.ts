import Koa from 'koa'
import serve from 'koa-static'
import { error, info } from './log'

const app = new Koa()

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

export function startFileServer(dirPath: string) {
  app.use(serve(dirPath))

  app.listen(7777, () => {
    info('Easy file server is running at port 7777')
  })

  errorListener.listen()
}
