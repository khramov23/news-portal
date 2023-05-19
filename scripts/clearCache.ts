import fs from 'fs/promises'
import path from 'path'

const pathToCacheDirectory = path.resolve(__dirname, '..', 'node_modules', '.cache')
void fs.rmdir(pathToCacheDirectory, { recursive: true })

console.log('cache cleared')
