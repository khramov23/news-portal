import { type FC } from 'react'

import styles from './Text.module.scss'
import { cls } from 'shared/lib/classNames'

export enum TextTheme {
    PRIMARY = 'primary',
    ERROR = 'error'
}

interface TextProps {
    className?: string
    title?: string
    text?: string
    theme?: TextTheme
}

export const Text: FC<TextProps> = ({ className, text, title, theme }) => {
    return (
        <div className={cls(styles.text, styles[theme], className)}>
            {title && <p className={styles.title}>{title}</p>}
            {text && <p className={styles.text}>{text}</p>}
        </div>
    )
}
