import { type CSSProperties, type FC, useMemo } from 'react'

import { cls } from '@/shared/lib/classNames'

import styles from './Avatar.module.scss'

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
