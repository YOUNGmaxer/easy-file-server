import { readDirectory } from '@/server/file-server-helper'
import { expect, it } from 'vitest'

it('readDirectory', async () => {
  const path = '/Users/admin/Downloads/'
  const files = await readDirectory(path)
  expect(files).toBe([])
})
