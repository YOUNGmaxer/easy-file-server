import { contextBridge, ipcMain, ipcRenderer } from 'electron';
import { startFileServer } from './file-server';
import type { FileServerOptions } from '@/types/file-server';

enum FileServerEvent {
  Start = 'start-file-server'
}

/** 监听文件服务事件 */
export function listenFileServerEvent() {
  ipcMain.on(FileServerEvent.Start, (event, options: FileServerOptions) => {
    startFileServer(options.dir)
  })
}

/** 注册 FileServer 相关接口，提供给 UI 层调用 */
export function registerFileServerAPI() {
  contextBridge.exposeInMainWorld('electronAPI', {
    startFileServer: (options: FileServerOptions) => ipcRenderer.send(FileServerEvent.Start, options)
  })
}
