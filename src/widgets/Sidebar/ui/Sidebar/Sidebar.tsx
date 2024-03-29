import { type FC, memo, useMemo, useState } from 'react'

import { useSelector } from 'react-redux'

import { LangSwitcher } from '@/features/LangSwitcher'
import { ThemeSwitcher } from '@/features/ThemeSwitcher'
import { cls } from '@/shared/lib/classNames'
import { Button, ButtonSize, ButtonTheme } from '@/shared/ui/Button'

import styles from './Sidebar.module.scss'
import { getSidebarItems } from '../../model/selectors/getSidebarItems'
import { SidebarItem } from '../SidebarItem/SidebarItem'

interface SidebarProps {
    className?: string
}

export const Sidebar: FC<SidebarProps> = memo(({ className }) => {
    const [collapsed, setCollapsed] = useState(false)
    const sidebarItems = useSelector(getSidebarItems)

    const toggleCollapsed = () => {
        setCollapsed(prev => !prev)
    }

    const itemsList = useMemo(() => {
        return (
            sidebarItems.map(item =>
                <SidebarItem
                    collapsed={collapsed}
                    key={item.path}
                    item={item}
                />
            )
        )
    }, [collapsed, sidebarItems])

    return (
        <aside
            data-testid='sidebar'
            className={cls(
                styles.sidebar,
                className,
                { [styles.collapsed]: collapsed }
            )}
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
                {itemsList}
            </div>
            <div className={styles.switchers}>
                <ThemeSwitcher/>
                <LangSwitcher short={collapsed} />
            </div>
        </aside>
    )
})
