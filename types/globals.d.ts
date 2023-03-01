import type { FileServerAPI } from './file-server'

interface ElectronAPI {
  fileServer: FileServerAPI;
}

declare global {
  interface Window {
    electronAPI: ElectronAPI;
  }
}
