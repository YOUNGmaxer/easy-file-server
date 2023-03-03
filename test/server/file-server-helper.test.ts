import { readDirectory } from '@/server/file-server-helper'
import { expect, it } from 'vitest'

it('readDirectory', async () => {
  const path = '/Users/azeryang/Downloads'
  const files = await readDirectory(path)
  expect(files).toEqual([
    '.DS_Store',
    '.localized',
    'fig.dmg'
  ])
})
