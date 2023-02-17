/** 文件服务启动选项 */
export interface FileServerOptions {
  /** 服务端口 */
  port?: number;
  /** 服务静态资源目录 */
  dict: string;
}
