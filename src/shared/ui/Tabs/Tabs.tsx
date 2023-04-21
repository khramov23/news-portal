import { type ReactNode } from 'react'

import styles from './Tabs.module.scss'
import { cls } from 'shared/lib/classNames'
import { Card } from '../Card/Card'

export interface TabItem<T extends string> {
    value: T
    content: ReactNode
}

interface TabsProps<T extends string> {
    className?: string
    items: Array<TabItem<T>>
    value: T
    onTabClick: (value: T) => void
}

export const Tabs = <T extends string>(props: TabsProps<T>) => {
    const { className, items, onTabClick, value } = props

    const onClick = (value: T) => () => {
        onTabClick(value)
    }

    return (
        <div className={cls(styles.tabs, className)}>
            {items.map(elem =>
                <Card
                    key={elem.value}
                    className={styles.tab}
                    onClick={onClick(elem.value)}
                    theme={value === elem.value ? 'primary' : 'outlined'}
                >
                    {elem.content}
                </Card>
            )}
        </div>
    )
}
