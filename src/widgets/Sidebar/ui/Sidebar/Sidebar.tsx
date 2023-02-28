import { type FC, memo, useState } from 'react'

import styles from './Sidebar.module.scss'
import { cls } from 'shared/lib/classNames'
import { Button, ButtonSize, ButtonTheme } from 'shared/ui/Button/Button'
import { ThemeSwitcher } from 'widgets/ThemeSwitcher'
import { LangSwitcher } from 'widgets/LangSwitcher'
import { sidebarItems } from 'widgets/Sidebar/model/items'
import { SidebarItem } from '../SidebarItem/SidebarItem'

interface SidebarProps {
    className?: string
}

export const Sidebar: FC<SidebarProps> = memo(({ className }) => {
    const [collapsed, setCollapsed] = useState(false)

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
                {sidebarItems.map(item =>
                    <SidebarItem
                        collapsed={collapsed}
                        key={item.path}
                        item={item}
                    />
                )}
            </div>
            <div className={styles.switchers}>
                <ThemeSwitcher/>
                <LangSwitcher short={collapsed} />
            </div>
        </div>
    )
})
