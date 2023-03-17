import type webpack from 'webpack'
import { type BuildOptions } from './types/config'
import { buildSassLoader } from './loaders/buildSassLoader'
import { buildSvgLoader } from './loaders/buildSvgLoader'

export function buildLoaders (options: BuildOptions): webpack.RuleSetRule[] {
    const { isDev } = options

    const babelLoader = {
        test: /\.(js|jsx|tsx)$/,
        exclude: /node_modules/,
        use: {
            loader: 'babel-loader',
            options: {
                presets: ['@babel/preset-env'],
                plugins: [isDev && 'react-refresh/babel'].filter(Boolean)
            }
        }
    }

    const assetsLoader = {
        test: /\.(png|jpg|jpeg|gif)$/i,
        type: 'asset/resource'
    }

    const svgLoader = buildSvgLoader()

    const
        typeScriptLoader = {
            test: /\.tsx?$/,
            use: 'ts-loader',
            exclude: /node_modules/
        }

    const sassLoader = buildSassLoader(isDev)

    return [
        assetsLoader,
        svgLoader,
        babelLoader,
        typeScriptLoader,
        sassLoader
    ]
}
