import { type FC, useState } from 'react'

import styles from './Sidebar.module.scss'
import { cls } from 'shared/lib/classNames'
import { Button, ButtonSize, ButtonTheme } from 'shared/ui/Button/Button'
import { ThemeSwitcher } from 'widgets/ThemeSwitcher'
import { LangSwitcher } from 'widgets/LangSwitcher'
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink'
import { useTranslation } from 'react-i18next'
import { RoutePath } from 'shared/config/routes/routes.config'

import MainIcon from 'shared/assets/main.svg'
import AboutIcon from 'shared/assets/about.svg'

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
        <div
            data-testid='sidebar'
            className={cls(
                styles.sidebar,
                className,
                { [styles.collapsed]: collapsed }
            )
            }
        >
            <Button
                data-testid='sidebar-toggle'
                onClick={toggleCollapsed}
                className={styles.buttonCollapse}
                theme={ButtonTheme.BACKGROUND_INVERTED}
                size={ButtonSize.XL}
                square={true}
            >
                {collapsed ? '>' : '<'}
            </Button>
            <div className={styles.items}>
                <AppLink className={styles.item} theme={AppLinkTheme.INVERTED} to={RoutePath.main}>
                    <MainIcon className={styles.icon} />
                    <span>{t('Главная')}</span>
                </AppLink>
                <AppLink className={styles.item} theme={AppLinkTheme.INVERTED} to={RoutePath.about}>
                    <AboutIcon className={styles.icon} />
                    <span>{t('О сайте')}</span>
                </AppLink>
            </div>
            <div className={styles.switchers}>
                <ThemeSwitcher/>
                <LangSwitcher short={collapsed} />
            </div>
        </div>
    )
}
