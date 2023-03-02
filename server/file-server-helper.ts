import { readdir } from 'node:fs/promises'

/**
 * 读取目录内容
 */
export async function readDirectory(path: string): Promise<string[]> {
  try {
    const files = await readdir(path)
    return files
  } catch (err) {
    return []
  }
}
