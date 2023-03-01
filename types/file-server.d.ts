/** 文件服务启动选项 */
export interface FileServerOptions {
  /** 服务端口 */
  port?: number;
  /** 服务静态资源目录 */
  dir: string;
}

export type FileServerStartResult = Promise<{
  isRunning: boolean;
  error?: Error;
}>

export type FileServerStopResult = Promise<{
  isStopped: boolean;
  error?: Error;
}>

export interface FileServerAPI {
  /** 启动文件服务 */
  start(options: FileServerOptions): FileServerStartResult;
  /** 停止文件服务 */
  stop(): FileServerStopResult;
}
