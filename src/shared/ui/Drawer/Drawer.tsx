import { type FC, memo, type ReactNode } from 'react'

import styles from './Drawer.module.scss'
import { cls } from 'shared/lib/classNames'
import { Portal } from '../Portal/Portal'
import { Overlay } from '..//Overlay/Overlay'
import { useTheme } from 'shared/lib/theme/useTheme'

interface DrawerProps {
    className?: string
    children: ReactNode
    isOpen: boolean
    closeHandler: () => void
}

export const Drawer: FC<DrawerProps> = memo((props) => {
    const { className, children, isOpen, closeHandler } = props

    const { theme } = useTheme()

    return (
        <Portal>
            <div className={cls(styles.drawer, className, { [styles.opened]: isOpen }, theme, 'appDrawer')}>
                <Overlay onClick={closeHandler} />
                <div className={styles.content} >
                    {children}
                </div>
            </div>
        </Portal>
    )
})
