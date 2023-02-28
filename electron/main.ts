import { listenFileServerEvent } from '@/server/file-server-listener'
import { app, BrowserWindow } from 'electron'
import { join } from 'node:path'

const devURL = 'http://localhost:5173'
let win: BrowserWindow | null = null

function createWindow(): void {
  win = new BrowserWindow({
    width: 1200,
    height: 600,
    webPreferences:{
      preload: join(__dirname, 'preload.js'),
      nodeIntegration: true
    }
  })

  listenFileServerEvent()

  win.loadURL(devURL)
  win.webContents.openDevTools()
}

app.whenReady().then(createWindow)

app.on('window-all-closed', () => {
  win = null
  // On Windows and Linux, exiting all windows generally quits an application entirely.
  if (process.platform !== 'darwin') app.quit()
})
