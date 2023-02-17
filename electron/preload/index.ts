import { contextBridge } from 'electron'
import { startFileServer } from './server'

contextBridge.exposeInMainWorld('versions', {
  node: process.versions.node,
  chrome: process.versions.chrome,
  electron: process.versions.electron
})

startFileServer()
