import { type FC, type MouseEvent, type ReactNode, useCallback, useEffect, useState } from 'react'

import styles from './Modal.module.scss'
import { cls } from 'shared/lib/classNames'
import { Portal } from '../Portal/Portal'
import { useTheme } from 'shared/lib/theme/useTheme'

interface ModalProps {
    className?: string
    children?: ReactNode
    isOpen?: boolean
    onClose?: () => void
    lazy?: boolean
}

export const Modal: FC<ModalProps> = (props) => {
    const { onClose, isOpen, className, children, lazy } = props
    const { theme } = useTheme()
    const [isMounted, setIsMounted] = useState(false)

    const onContentClick = (event: MouseEvent) => {
        event.stopPropagation()
    }

    const closeHandler = useCallback(() => {
        if (onClose) { onClose() }
    }, [onClose])

    useEffect(() => {
        if (isOpen) { setIsMounted(true) }

        return () => {
            setIsMounted(false)
        }
    }, [isOpen])

    useEffect(() => {
        const onKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape') {
                closeHandler()
            }
        }

        if (isOpen) {
            window.addEventListener('keydown', onKeyDown)
        }

        return () => {
            window.removeEventListener('keydown', onKeyDown)
        }
    }, [closeHandler, isOpen])

    if (lazy && !isMounted) {
        return null
    }

    return (
        <Portal>
            <div className={cls(styles.modal, className, { [styles.opened]: isOpen }, theme, 'appModal')}>
                <div className={styles.overlay} onClick={closeHandler}>
                    <div className={styles.content} onClick={onContentClick}>
                        {children}
                    </div>
                </div>
            </div>
        </Portal>
    )
}
