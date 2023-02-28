import { type FC, memo } from 'react'

import { cls } from 'shared/lib/classNames'
import { Button, ButtonTheme } from 'shared/ui/Button/Button'
import { useTheme } from 'shared/lib/theme/useTheme'
import { Theme } from 'shared/lib/theme/ThemeContext'
import DarkSwitcher from 'shared/assets/theme-dark.svg'
import LightSwitcher from 'shared/assets/theme-light.svg'

import styles from './ThemeSwitcher.module.scss'

interface ThemeSwitcherProps {
    className?: string
}

export const ThemeSwitcher: FC<ThemeSwitcherProps> = memo(({ className }) => {
    const { toggleTheme, theme } = useTheme()

    return (
        <Button theme={ButtonTheme.CLEAR} className={cls(styles.themeSwitcher, className)} onClick={toggleTheme}>
            {theme === Theme.LIGHT ? <LightSwitcher className={styles.icon}/> : <DarkSwitcher className={styles.icon}/>}
        </Button>
    )
})
