import { type BuildOptions } from '../types/config'
import babelRemoveAttributesPlugin from '../../babel/babelRemoveAttributesPlugin'

export interface BuildBabelLoaderProps extends BuildOptions {
    isTSX?: boolean
}

export const buildBabelLoader = ({ isDev, isTSX }: BuildBabelLoaderProps) => ({
    test: isTSX ? /\.(jsx|tsx)$/ : /\.(js|ts)$/,
    exclude: /node_modules/,
    use: {
        loader: 'babel-loader',
        options: {
            presets: ['@babel/preset-env'],
            plugins: [
                [
                    '@babel/plugin-transform-typescript',
                    {
                        isTSX
                    }
                ],
                '@babel/plugin-transform-runtime',
                isTSX && !isDev && [
                    babelRemoveAttributesPlugin,
                    {
                        forbidden: ['data-testid']
                    }
                ],
                isDev && 'react-refresh/babel'
            ].filter(Boolean)
        }
    }
})
