import { app, BrowserWindow } from 'electron'
import { join } from 'node:path'

const rootPath = join(__dirname, '..')
const indexHtml = join(rootPath, 'index.html')

function createWindow(): void {
  const win = new BrowserWindow({
    width: 800,
    height: 600
  })

  win.loadFile(indexHtml)
  win.webContents.openDevTools()
}

app.whenReady().then(createWindow)
