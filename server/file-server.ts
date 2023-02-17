import Koa from 'koa'
import serve from 'koa-static'

const app = new Koa()
const dirPath = '/Users/admin/Downloads'

app.use(serve(dirPath))

export function startFileServer() {
  app.listen(7777, () => {
    console.log('Easy file server is running at port 7777')
  })
}
