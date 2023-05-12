import { type DetailedHTMLProps, type FC, type HTMLAttributes, memo } from 'react'

import { cls } from '@/shared/lib/classNames'

import styles from './Overlay.module.scss'

interface OverlayProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

export const Overlay: FC<OverlayProps> = memo((props) => {
    const { className, ...otherProps } = props

    return (
        <div className={cls(styles.overlay, className)} {...otherProps}></div>
    )
})
