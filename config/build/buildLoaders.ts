import type webpack from 'webpack'
import { type BuildOptions } from './types/config'
import { buildSassLoader } from './loaders/buildSassLoader'
import { buildSvgLoader } from './loaders/buildSvgLoader'
import { buildBabelLoader } from './loaders/buildBabelLoader'

export function buildLoaders (options: BuildOptions): webpack.RuleSetRule[] {
    const { isDev } = options

    const codeBabelLoader = buildBabelLoader({ ...options, isTSX: false })
    const tsxCodeBabelLoader = buildBabelLoader({ ...options, isTSX: true })

    const assetsLoader = {
        test: /\.(png|jpg|jpeg|gif)$/i,
        type: 'asset/resource'
    }

    const svgLoader = buildSvgLoader()

    const sassLoader = buildSassLoader(isDev)

    return [
        assetsLoader,
        svgLoader,
        codeBabelLoader,
        tsxCodeBabelLoader,
        sassLoader
    ]
}
