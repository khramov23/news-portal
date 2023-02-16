import { type RuleSetRule } from 'webpack'

export function buildSvgLoader (): RuleSetRule {
    return {
        test: /\.svg$/i,
        use: ['@svgr/webpack']
    }
}
