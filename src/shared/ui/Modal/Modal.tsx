import { type FC, type ReactNode } from 'react'

import styles from './Modal.module.scss'
import { cls } from 'shared/lib/classNames'
import { Portal } from '../Portal/Portal'
import { useTheme } from 'shared/lib/theme/useTheme'
import { Overlay } from '../Overlay/Overlay'
import { ANIMATION_DURATION } from 'shared/const/common'
import { useModal } from 'shared/hooks/useModal'

interface ModalProps {
    className?: string
    children?: ReactNode
    isOpen: boolean
    onClose?: () => void
    lazy?: boolean
}

export const Modal: FC<ModalProps> = (props) => {
    const { onClose, isOpen, className, children, lazy } = props
    const { isClosing, closeHandler, isMounted } = useModal({
        isOpen,
        animationDuration: ANIMATION_DURATION,
        onClose
    })
    const { theme } = useTheme()

    if (lazy && !isMounted) {
        return null
    }

    return (
        <Portal>
            <div className={cls(
                styles.modal,
                className,
                {
                    [styles.opened]: isOpen,
                    [styles.isClosing]: isClosing
                },
                theme,
                'appModal'
            )}>
                <Overlay onClick={closeHandler} />
                <div className={styles.content} >
                    {children}
                </div>
            </div>
        </Portal>
    )
}
