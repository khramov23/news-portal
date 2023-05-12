import { type FC, memo } from 'react'

import styles from './SidebarItem.module.scss'
import { AppLink, AppLinkTheme } from '@/shared/ui/AppLink/AppLink'
import { useTranslation } from 'react-i18next'
import { type SidebarItemType } from '../../model/types/sidebar'
import { cls } from '@/shared/lib/classNames'
import { useAuth } from '@/entities/User'

interface SidebarItemProps {
    item: SidebarItemType
    collapsed: boolean
}

export const SidebarItem: FC<SidebarItemProps> = memo(({ item, collapsed }) => {
    const { t } = useTranslation()
    const isAuth = useAuth()

    if (item.authOnly && !isAuth) { return null }

    return (
        <AppLink
            className={cls(styles.item, { [styles.collapsed]: collapsed })}
            theme={AppLinkTheme.INVERTED}
            to={item.path}
        >
            <item.Icon className={styles.icon} />
            <span>{t(item.text)}</span>
        </AppLink>
    )
})
