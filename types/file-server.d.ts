/** 文件服务启动选项 */
export interface FileServerOptions {
  /** 服务端口 */
  port?: number;
  /** 服务静态资源目录 */
  dir: string;
}

export interface FileServerAPI {
  /** 启动文件服务 */
  startFileServer(options: FileServerOptions): void;
  /** 停止文件服务 */
  stopFileServer(): void;
}
