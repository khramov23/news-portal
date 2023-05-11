import { type CSSProperties, type FC } from 'react'

import styles from './Skeleton.module.scss'
import { cls } from '@/shared/lib/classNames'

interface SkeletonProps {
    className?: string
    width: number | string
    height: number | string
    borderRadius?: number | string
}

export const Skeleton: FC<SkeletonProps> = (props) => {
    const { className, height, width, borderRadius } = props

    const cssProperties: CSSProperties = { width, height, borderRadius }

    return (
        <div className={cls(styles.skeleton, className)} style={cssProperties}></div>
    )
}
