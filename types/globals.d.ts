import type { FileServerAPI } from './file-server'

declare global {
  interface Window {
    electronAPI: FileServerAPI;
  }
}
