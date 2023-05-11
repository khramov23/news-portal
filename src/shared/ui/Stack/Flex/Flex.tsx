import { type DetailedHTMLProps, type FC, type HTMLAttributes, type ReactNode } from 'react'

import styles from './Flex.module.scss'
import { cls } from '@/shared/lib/classNames'

type FlexJustify = 'start' | 'center' | 'end' | 'between' | 'around'
type FlexAlign = 'start' | 'center' | 'end'
type FlexDirection = 'row' | 'column'
type FlexGap = 0 | 4 | 8 | 12 | 16 | 20 | 24 | 28 | 32 | 36 | 72

export interface FlexProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    className?: string
    children: ReactNode
    justify?: FlexJustify
    align?: FlexAlign
    direction?: FlexDirection
    max?: boolean
    gap?: FlexGap
}

export const Flex: FC<FlexProps> = (props) => {
    const { className, children, max, align = 'start', direction = 'row', justify = 'start', gap = 0 } = props

    const classes = cls(
        className,
        styles.flex,
        styles[`justify__${justify}`],
        styles[`align__${align}`],
        styles[`direction__${direction}`],
        styles[`gap__${gap}`],
        {
            [styles.max]: max
        }
    )

    return (
        <div className={classes}>
            {children}
        </div>
    )
}
