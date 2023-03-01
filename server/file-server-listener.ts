import { contextBridge, ipcMain, ipcRenderer } from 'electron';
import { startFileServer, stopFileServer } from './file-server';
import type { FileServerOptions } from '@/types/file-server';

enum FileServerEvent {
  Start = 'start-file-server',
  Stop = 'stop-file-server'
}

/** 监听文件服务事件 */
export function listenFileServerEvent() {
  ipcMain.handle(FileServerEvent.Start, async (_, options: FileServerOptions) => await startFileServer(options.dir))
  ipcMain.handle(FileServerEvent.Stop, stopFileServer)
}

/** 注册 FileServer 相关接口，提供给 UI 层调用 */
export function registerFileServerAPI() {
  contextBridge.exposeInMainWorld('electronAPI', {
    fileServer: {
      start: (options: FileServerOptions) => ipcRenderer.invoke(FileServerEvent.Start, options),
      stop: () => ipcRenderer.invoke(FileServerEvent.Stop),
    }
  })
}
