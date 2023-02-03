import { app, BrowserWindow } from 'electron'

const devURL = 'http://localhost:5173'

function createWindow(): void {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
  })

  win.loadURL(devURL)
  win.webContents.openDevTools()
}

app.whenReady().then(createWindow)
