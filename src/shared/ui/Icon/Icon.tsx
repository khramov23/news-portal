import { type FC, type ReactElement, type SVGProps } from 'react'

import { cls } from '@/shared/lib/classNames'

import styles from './Icon.module.scss'

type IconSize = 's' | 'm' | 'l' | 'xl' | 'xxl'

type IconTheme = 'primary' | 'inverted'

interface IconProps extends SVGProps<SVGElement> {
    className?: string
    size?: IconSize
    theme?: IconTheme
    Svg: (props: SVGProps<SVGElement>) => ReactElement
}

export const Icon: FC<IconProps> = (props) => {
    const { className, Svg, size = 'm', theme = 'primary', ...otherProps } = props

    return (
        <Svg className={cls(styles.icon, className, styles[size], styles[theme])} {...otherProps} />
    )
}
