import { readdir } from 'node:fs/promises'

/** 忽略的文件 */
const fileIgnore = ['.DS_Store', '.localized']

/**
 * 读取目录内容
 */
export async function readDirectory(path: string): Promise<string[]> {
  try {
    const files = await readdir(path)
    return files.filter(file => !fileIgnore.includes(file))
  } catch (err) {
    return []
  }
}
