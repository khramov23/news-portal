import { type FC, type ReactNode, useMemo, useState } from 'react'

import { LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext, type ThemeContextProps } from '@/shared/lib/theme/ThemeContext'

const defaultTheme = localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme || Theme.LIGHT

interface ThemeProviderProps {
    children?: ReactNode
}

const ThemeProvider: FC<ThemeProviderProps> = ({ children }) => {
    const [theme, setTheme] = useState<Theme>(defaultTheme)

    const defaultProps = useMemo<ThemeContextProps>(() => ({
        theme, setTheme
    }), [theme])

    return (
        <ThemeContext.Provider value={defaultProps}>
            {children}
        </ThemeContext.Provider>
    )
}

export default ThemeProvider
