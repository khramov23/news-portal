import { type FC, memo } from 'react'

import styles from './Text.module.scss'
import { cls } from 'shared/lib/classNames'

export enum TextTheme {
    PRIMARY = 'primary',
    ERROR = 'error'
}

type Align = 'center' | 'left' | 'right'

interface TextProps {
    className?: string
    title?: string
    text?: string
    theme?: TextTheme
    align?: Align
}

export const Text: FC<TextProps> = memo((props) => {
    const { className, text, title, theme = TextTheme.PRIMARY, align = 'left' } = props
    return (
        <div className={cls(styles.text, styles[theme], className, styles[align])}>
            {title && <p className={styles.title}>{title}</p>}
            {text && <p className={styles.text}>{text}</p>}
        </div>
    )
})
