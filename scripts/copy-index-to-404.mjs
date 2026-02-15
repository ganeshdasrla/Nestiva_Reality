import { copyFile, access } from 'node:fs/promises'
import { constants } from 'node:fs'
import path from 'node:path'

const distDir = path.resolve('dist')
const source = path.join(distDir, 'index.html')
const target = path.join(distDir, '404.html')

try {
  await access(source, constants.F_OK)
  try {
    await access(target, constants.F_OK)
    console.log('Kept existing dist/404.html')
  } catch {
    await copyFile(source, target)
    console.log('Created dist/404.html from dist/index.html')
  }
} catch (error) {
  console.error('Failed to create SPA fallback 404.html:', error)
  process.exitCode = 1
}
