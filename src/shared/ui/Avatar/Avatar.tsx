import { type CSSProperties, type FC, useMemo } from 'react'

import styles from './Avatar.module.scss'
import { cls } from 'shared/lib/classNames'

interface AvatarProps {
    className?: string
    src?: string
    size?: number
    alt?: string
}

export const Avatar: FC<AvatarProps> = (props) => {
    const { src, alt, size = 100, className } = props

    const stylesObject = useMemo<CSSProperties>(() => ({
        width: size,
        height: size
    }), [size])

    return (
        <img
            className={cls(styles.avatar, className)}
            src={src}
            alt={alt}
            style={stylesObject}
        />
    )
}
