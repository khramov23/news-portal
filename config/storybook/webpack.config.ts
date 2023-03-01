import webpack from 'webpack'
import { type BuildPaths } from '../build/types/config'
import path from 'path'
import { buildSassLoader } from '../build/loaders/buildSassLoader'
import { type RuleSetRule } from 'webpack'
import { buildSvgLoader } from '../build/loaders/buildSvgLoader'

export default ({ config }: { config: webpack.Configuration }) => {
    const paths: BuildPaths = {
        build: '',
        html: '',
        entry: '',
        src: path.resolve(__dirname, '..', '..', 'src')
    }

    config.resolve.modules.push(paths.src)
    config.module.rules.push(buildSassLoader(true))

    config.module.rules = config.module.rules.map((rule: RuleSetRule) => {
        if (/.svg/.test(rule.test as string)) {
            return { ...rule, exclude: /.svg/ }
        }
        return rule
    })
    config.module.rules.push(buildSvgLoader())
    config.plugins.push(new webpack.DefinePlugin({
        __IS_DEV__: JSON.stringify(false),
        __API__: JSON.stringify('')
    }))

    return config
}
