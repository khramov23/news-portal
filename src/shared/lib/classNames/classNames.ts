type Mods = Record<string, string | boolean>

export const cls = (...args: Array<string | Mods>): string =>
    args.map(arg => {
        if (typeof arg === "string") {
            return arg
        } else {
            return Object.entries(arg)
                .filter(([_, value]) => !!value)
                .map(entry => entry[0])
                .join(' ')
        }
    }).join(' ')

