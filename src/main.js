const { app, BrowserWindow } = require('electron')
const { join } = require('node:path')

const rootPath = join(__dirname, '..')
const indexHtml = join(rootPath, 'index.html')

function createWindow() {
  const win = new BrowserWindow({
    width: 800,
    height: 600
  })

  win.loadFile(indexHtml)
}

app.whenReady().then(() => {
  createWindow()
})
