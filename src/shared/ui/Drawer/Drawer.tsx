import { type FC, memo, type ReactNode } from 'react'

import styles from './Drawer.module.scss'
import { cls } from 'shared/lib/classNames'
import { Portal } from '../Portal/Portal'
import { Overlay } from '..//Overlay/Overlay'
import { useTheme } from 'shared/lib/theme/useTheme'
import { useModal } from 'shared/hooks/useModal'
import { ANIMATION_DURATION } from 'shared/const/common'

interface DrawerProps {
    className?: string
    children: ReactNode
    isOpen: boolean
    onClose: () => void
    lazy?: boolean
}

export const Drawer: FC<DrawerProps> = memo((props) => {
    const { className, children, isOpen, onClose, lazy } = props
    const { closeHandler, isClosing, isMounted } = useModal({
        isOpen,
        onClose,
        animationDuration: ANIMATION_DURATION
    })

    const { theme } = useTheme()

    if (lazy && !isMounted) {
        return null
    }

    return (
        <Portal>
            <div className={cls(
                styles.drawer,
                className,
                {
                    [styles.opened]: isOpen,
                    [styles.isClosing]: isClosing
                },
                theme,
                'appDrawer'
            )}>
                <Overlay onClick={closeHandler} />
                <div className={styles.content} >
                    {children}
                </div>
            </div>
        </Portal>
    )
})
