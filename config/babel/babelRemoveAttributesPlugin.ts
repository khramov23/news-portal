import { type NodePath, type PluginItem } from '@babel/core'
import { type JSXAttribute } from '@babel/types'

interface PluginOptions {
    forbidden: string[]
}

export default (): PluginItem => {
    return {
        visitor: {
            JSXAttribute (path: NodePath<JSXAttribute>, state: { opts: PluginOptions }) {
                const nodeName = String(path.node.name.name)
                if (state.opts.forbidden.includes(nodeName)) {
                    path.remove()
                }
            }
        }
    }
}
