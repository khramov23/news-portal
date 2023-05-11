import { type FC, memo, useMemo, useState } from 'react'

import styles from './Sidebar.module.scss'
import { cls } from '@/shared/lib/classNames'
import { Button, ButtonSize, ButtonTheme } from '@/shared/ui/Button/Button'
import { ThemeSwitcher } from '@/widgets/ThemeSwitcher'
import { LangSwitcher } from '@/widgets/LangSwitcher'
import { SidebarItem } from '../SidebarItem/SidebarItem'
import { useSelector } from 'react-redux'
import { getSidebarItems } from '../../model/selectors/getSidebarItems'

interface SidebarProps {
    className?: string
}

export const Sidebar: FC<SidebarProps> = memo(({ className }) => {
    const [collapsed, setCollapsed] = useState(false)
    const sidebarItems = useSelector(getSidebarItems)
    let a = 5

    const toggleCollapsed = () => {
        setCollapsed(prev => !prev)
        a += 5
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
