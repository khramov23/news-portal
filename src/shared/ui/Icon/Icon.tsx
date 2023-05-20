import { type FC, type ReactElement, type SVGProps } from 'react'

import { cls } from '@/shared/lib/classNames'

import styles from './Icon.module.scss'

type IconTheme = 'primary' | 'inverted'

interface IconProps extends SVGProps<SVGElement> {
    className?: string
    size?: number
    theme?: IconTheme
    Svg: (props: SVGProps<SVGElement>) => ReactElement
}

export const Icon: FC<IconProps> = (props) => {
    const { className, Svg, size = 20, theme = 'primary', ...otherProps } = props

    return (
        <Svg
            className={cls(styles.icon, className, styles[theme])}
            width={size}
            height={size}
            {...otherProps}
        />
    )
}
