import { type DetailedHTMLProps, type FC, type HTMLAttributes, memo } from 'react'

import styles from './Overlay.module.scss'
import { cls } from 'shared/lib/classNames'

interface OverlayProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

export const Overlay: FC<OverlayProps> = memo((props) => {
    const { className, ...otherProps } = props

    return (
        <div className={cls(styles.overlay, className)} {...otherProps}></div>
    )
})
