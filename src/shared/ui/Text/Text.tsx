import { type FC, memo } from 'react'

import styles from './Text.module.scss'
import { cls } from 'shared/lib/classNames'

export enum TextTheme {
    PRIMARY = 'primary',
    ERROR = 'error',
    INVERTED = 'inverted'
}

type TextTag = 'h2' | 'h3' | 'p'

type Align = 'center' | 'left' | 'right'
type Size = 'l' | 'xl'

const mapSizeToTag: Record<Size, TextTag> = {
    l: 'h3',
    xl: 'h2'
}

interface TextProps {
    className?: string
    title?: string
    text?: string
    theme?: TextTheme
    align?: Align
    size?: Size

    'data-testid'?: string
}

export const Text: FC<TextProps> = memo((props) => {
    const {
        className,
        text,
        title,
        theme = TextTheme.PRIMARY,
        align = 'left',
        size = 'l',
        'data-testid': dataTestId = 'Text'
    } = props

    const HeaderTag = mapSizeToTag[size]

    return (
        <div className={cls(styles.text, styles[theme], className, styles[align], styles[size])}>
            {title && (
                <HeaderTag
                    className={styles.title}
                    data-testid={`${dataTestId}.Header`}
                >
                    {title}
                </HeaderTag>
            )}
            {text && <p
                className={styles.text}
                data-testid={`${dataTestId}.Paragraph`}
            >
                {text}
            </p>}
        </div>
    )
})
