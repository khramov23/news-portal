import { type FC, useState } from 'react'

import styles from './Sidebar.module.scss'
import { cls } from 'shared/lib/classNames'
import { Button } from 'shared/ui/Button/Button'
import { ThemeSwitcher } from 'widgets/ThemeSwitcher'
import { LangSwitcher } from 'widgets/LangSwitcher'
import { useTranslation } from 'react-i18next'

interface SidebarProps {
    className?: string
}

export const Sidebar: FC<SidebarProps> = ({ className }) => {
    const [collapsed, setCollapsed] = useState(false)
    const { t } = useTranslation()

    const toggleCollapsed = () => {
        setCollapsed(prev => !prev)
    }

    return (
        <div className={cls(styles.sidebar, className, { [styles.collapsed]: collapsed })}>
            <Button onClick={toggleCollapsed}>{t('Переключить')}</Button>
            <div className={styles.switchers}>
                <ThemeSwitcher/>
                <LangSwitcher/>
            </div>
        </div>
    )
}
