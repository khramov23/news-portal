import fs from 'fs/promises'
import path from 'path'

declare let pathToCacheDirectory: string

try {
    pathToCacheDirectory = path.resolve(__dirname, '..', 'node_modules', '.cache')
} catch (e) {
    console.warn('There is no cache')
}

try {
    void fs.rm(pathToCacheDirectory, { recursive: true })
    console.log('cache cleared')
} catch (e) {
    console.warn('An error occurred while clearing cache')
}
