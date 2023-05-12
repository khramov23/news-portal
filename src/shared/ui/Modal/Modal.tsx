import { type FC, type ReactNode } from 'react'

import { ANIMATION_DURATION } from '@/shared/const/common'
import { useModal } from '@/shared/hooks/useModal'
import { cls } from '@/shared/lib/classNames'
import { useTheme } from '@/shared/lib/theme/useTheme'

import styles from './Modal.module.scss'
import { Overlay } from '../Overlay/Overlay'
import { Portal } from '../Portal/Portal'

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
