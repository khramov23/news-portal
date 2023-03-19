import { type FC, type ReactElement, type SVGProps } from 'react'

import styles from './Icon.module.scss'
import { cls } from 'shared/lib/classNames'

type IconSize = 's' | 'm' | 'l' | 'xl'

interface IconProps extends SVGProps<SVGElement> {
    className?: string
    size?: IconSize
    Svg: (props: SVGProps<SVGElement>) => ReactElement
}

export const Icon: FC<IconProps> = (props) => {
    const { className, Svg, size = 'm', ...otherProps } = props

    return (
        <Svg className={cls(styles.icon, className, styles[size])} {...otherProps} />
    )
}
