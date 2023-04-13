import { type FC, type HTMLAttributes, type ReactNode } from 'react'

import styles from './Card.module.scss'
import { cls } from 'shared/lib/classNames'

interface CardProps extends HTMLAttributes<HTMLDivElement> {
    className?: string
    children?: ReactNode
}

export const Card: FC<CardProps> = ({ className, children, ...otherProps }) => {
    return (
        <div
            className={cls(styles.card, className)}
            {...otherProps}
        >
            {children}
        </div>
    )
}
