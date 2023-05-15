import { type FC, memo } from 'react'

import DarkSwitcher from '@/shared/assets/icons/theme-dark.svg'
import LightSwitcher from '@/shared/assets/icons/theme-light.svg'
import { cls } from '@/shared/lib/classNames'
import { Theme } from '@/shared/lib/theme/ThemeContext'
import { useTheme } from '@/shared/lib/theme/useTheme'
import { Button, ButtonTheme } from '@/shared/ui/Button/Button'

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
