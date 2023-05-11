import { type FC, type HTMLAttributes, type ReactNode } from 'react'

import styles from './Card.module.scss'
import { cls } from '@/shared/lib/classNames'

export type CardTheme = 'primary' | 'outlined'

interface CardProps extends HTMLAttributes<HTMLDivElement> {
    className?: string
    children?: ReactNode
    theme?: CardTheme
}

export const Card: FC<CardProps> = (props) => {
    const { className, children, theme = 'primary', ...otherProps } = props

    return (
        <div
            className={cls(styles.card, className, styles[theme])}
            {...otherProps}
        >
            {children}
        </div>
    )
}
