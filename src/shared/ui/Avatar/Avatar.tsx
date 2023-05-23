import { type CSSProperties, type FC, memo, useMemo } from 'react'

import AvatarIcon from '@/shared/assets/icons/avatar.svg'
import { cls } from '@/shared/lib/classNames'

import styles from './Avatar.module.scss'
import { AppImage } from '../AppImage'
import { Icon } from '../Icon'
import { Skeleton } from '../Skeleton'

interface AvatarProps {
    className?: string
    src?: string
    size?: number
    alt?: string
    fallbackInverted?: boolean
}

export const Avatar: FC<AvatarProps> = memo((props) => {
    const { src, alt, size = 100, className, fallbackInverted = false } = props

    const stylesObject = useMemo<CSSProperties>(() => ({
        width: size,
        height: size
    }), [size])

    const loadingFallback = <Skeleton width={size} height={size} borderRadius={'50%'} />
    const errorFallback = <Icon Svg={AvatarIcon} size={size} theme={fallbackInverted ? 'inverted' : 'primary'} />

    return (
        <AppImage
            className={cls(styles.avatar, className)}
            src={src}
            alt={alt}
            fallback={loadingFallback}
            errorFallback={errorFallback}
            style={stylesObject}
        />
    )
})
