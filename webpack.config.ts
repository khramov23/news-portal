import type webpack from 'webpack'
import { buildWebpackConfig } from './config/build/buildWebpackConfig'
import path from 'path'
import { type BuildEnv, type BuildPaths } from './config/build/types/config'

export default (env: BuildEnv): webpack.Configuration => {
    const paths: BuildPaths = {
        build: path.resolve(__dirname, 'build'),
        entry: path.resolve(__dirname, 'src', 'index.tsx'),
        html: path.resolve(__dirname, 'public', 'index.html'),
        src: path.resolve(__dirname, 'src')
    }

    const mode = env.mode || 'development'
    const isDev = mode === 'development'
    const port = env.port || 3000
    const apiUrl = env.apiUrl || 'http://localhost:5000'

    return buildWebpackConfig({
        mode,
        paths,
        isDev,
        port,
        apiUrl
    })
}
