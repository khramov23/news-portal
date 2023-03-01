type Mods = Record<string, string | boolean>

export const cls = (...args: Array<string | Mods | undefined>): string =>
    args.map(arg => {
        if (typeof arg === 'string') {
            return arg
        } else if (typeof arg === 'object') {
            return Object.entries(arg)
                .filter(([_, value]) => !!value)
                .map(entry => entry[0])
                .join(' ')
        } else {
            return ''
        }
    }).filter(cn => cn !== '').join(' ')
