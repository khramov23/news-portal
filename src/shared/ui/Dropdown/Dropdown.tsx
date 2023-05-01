import { Menu } from '@headlessui/react'
import { type FC, Fragment, memo, type ReactNode, useCallback } from 'react'

import styles from './Dropdown.module.scss'
import { cls } from 'shared/lib/classNames'
import { type DropdownDirection } from '../ListBox/ListBox'
import { AppLink } from '../AppLink/AppLink'

export interface DropdownItem {
    content: ReactNode
    onClick?: () => void
    href?: string
    disabled?: boolean
}

interface DropdownProps {
    className?: string
    trigger?: ReactNode
    items?: DropdownItem[]
    direction?: DropdownDirection
}

export const Dropdown: FC<DropdownProps> = memo((props) => {
    const {
        className,
        trigger,
        items,
        direction = 'bottom_left'
    } = props

    const content = useCallback((item: DropdownItem) => ({ active }: { active: boolean }) => {
        if (item.href) {
            return (
                <AppLink
                    className={cls(styles.item, { [styles.active]: active })}
                    to={item.href}
                >
                    {item.content}
                </AppLink>
            )
        }
        return (
            <button
                className={cls(styles.item, { [styles.active]: active })}
                onClick={item.onClick}
            >
                {item.content}
            </button>
        )
    }, [])

    return (
        <Menu as={`${'div'}`} className={cls(className, styles.dropdown)}>
            <Menu.Button className={styles.trigger}>
                {trigger}
            </Menu.Button>
            <Menu.Items className={cls(styles.menu, styles[direction])}>
                {items?.map(item =>
                    <Menu.Item
                        key={String(item.content)}
                        as={Fragment}
                        disabled={item.disabled}
                    >
                        {content(item)}
                    </Menu.Item>
                )}
            </Menu.Items>
        </Menu>
    )
})
