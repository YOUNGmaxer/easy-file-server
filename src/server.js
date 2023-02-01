const Koa = require('koa')
const static = require('koa-static')

const app = new Koa()
const path = '/Users/admin/Downloads'

app.use(static(path))

app.listen(7777, () => {
    console.log('Easy file server is running at port 7777')
})