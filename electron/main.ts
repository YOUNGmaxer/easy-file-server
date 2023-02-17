import { app, BrowserWindow } from 'electron'
import { join } from 'node:path'

const devURL = 'http://localhost:5173'
let win: BrowserWindow | null = null

function createWindow(): void {
  win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences:{
      preload: join(__dirname, 'preload/index.js'),
      nodeIntegration: true
    }
  })

  win.loadURL(devURL)
  win.webContents.openDevTools()
}

app.whenReady().then(createWindow)

app.on('window-all-closed', () => {
  win = null
  // On Windows and Linux, exiting all windows generally quits an application entirely.
  if (process.platform !== 'darwin') app.quit()
})
