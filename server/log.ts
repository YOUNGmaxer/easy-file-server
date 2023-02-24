const enum LogLevel {
  Info = 'INFO',
  Error = 'ERROR'
}

const logOrigin = 'file-server'

export function info(...args: any[]): void {
  console.info(`[${LogLevel.Info}]`, logOrigin, ...args)
}

export function error(...args: any[]): void {
  console.error(`[${LogLevel.Error}]`, logOrigin, ...args);
}
