import { type MutableRefObject, useCallback, useEffect, useRef, useState } from 'react'

interface UseModalOptions {
    onClose?: () => void
    isOpen: boolean
    animationDuration: number
}

export const useModal = (options: UseModalOptions) => {
    const { isOpen, animationDuration, onClose } = options

    const [isMounted, setIsMounted] = useState(false)
    const [isClosing, setIsClosing] = useState(false)
    const timeoutRef = useRef() as MutableRefObject<NodeJS.Timeout>

    const closeHandler = useCallback(() => {
        if (onClose) {
            setIsClosing(true)
            timeoutRef.current = setTimeout(() => {
                onClose()
                setIsClosing(false)
            }, animationDuration)
        }
    }, [animationDuration, onClose])

    useEffect(() => {
        if (isOpen) { setIsMounted(true) }

        return () => {
            setIsMounted(false)
            clearTimeout(timeoutRef.current)
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

    return {
        isClosing,
        isMounted,
        closeHandler
    }
}
