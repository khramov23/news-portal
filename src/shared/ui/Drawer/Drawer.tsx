import { type FC, memo, type ReactNode, useCallback, useEffect } from 'react'

import styles from './Drawer.module.scss'
import { cls } from 'shared/lib/classNames'
import { Portal } from '../Portal/Portal'
import { Overlay } from '..//Overlay/Overlay'
import { useTheme } from 'shared/lib/theme/useTheme'
import { useModal } from 'shared/hooks/useModal'
import { ANIMATION_DURATION } from 'shared/const/common'
import { AnimationProvider, useAnimationLibs } from 'shared/lib/components/AnimationProvider'

interface DrawerProps {
    className?: string
    children: ReactNode
    isOpen: boolean
    onClose: () => void
    lazy?: boolean
}

const height = window.innerHeight * 0.7

export const DrawerContent: FC<DrawerProps> = memo((props) => {
    const { className, children, isOpen, onClose, lazy } = props

    const { theme } = useTheme()
    const { Spring, Gesture } = useAnimationLibs()

    const [{ y }, api] = Spring.useSpring(() => ({ y: height }))
    const { isMounted } = useModal({
        isOpen,
        onClose,
        animationDuration: ANIMATION_DURATION
    })

    const openDrawer = useCallback((canceled?: boolean) => {
        api.start({
            y: 0,
            immediate: false,
            config: canceled ? Spring.config.wobbly : Spring.config.stiff
        })
    }, [Spring.config.stiff, Spring.config.wobbly, api])

    const closeDrawer = (velocity = 0) => {
        api.start({
            y: height,
            immediate: false,
            config: { ...Spring.config.stiff, velocity },
            onResolve: onClose
        })
    }

    const bind = Gesture.useDrag(({
        last,
        velocity: [, vy],
        direction: [, dy],
        movement: [, my],
        cancel,
        canceled
    }) => {
        if (my < -70) {
            cancel()
        }

        if (last) {
            my > height * 0.5 || (vy > 0.5 && dy > 0) ? closeDrawer(vy) : openDrawer(canceled)
        } else {
            api.start({ y: my, immediate: true })
        }
    }, {
        from: () => [0, y.get()],
        filterTaps: true,
        bounds: { top: 0 },
        rubberband: true
    })

    useEffect(() => {
        if (isOpen) {
            openDrawer()
        }
    }, [isOpen, openDrawer, api])

    const display = y.to((py) => (py < height ? 'block' : 'none'))

    if (lazy && !isMounted) {
        return null
    }

    return (
        <Portal>
            <div className={cls(
                styles.drawer,
                className,
                {
                    [styles.opened]: isOpen
                },
                theme,
                'appDrawer'
            )}>
                <Overlay onClick={() => { closeDrawer() }} />
                <Spring.a.div
                    {...bind()}
                    className={styles.content}
                    style={{ display, bottom: `calc(-100vh + ${height - 100}px)`, y }}
                >
                    {children}
                </Spring.a.div>
            </div>
        </Portal>
    )
})

export const DrawerWithLibs = (props: DrawerProps) => {
    const { isLoaded } = useAnimationLibs()

    if (!isLoaded) {
        return null
    }

    return (
        <DrawerContent {...props} />
    )
}

export const Drawer = (props: DrawerProps) => {
    return (
        <AnimationProvider>
            <DrawerWithLibs {...props} />
        </AnimationProvider>
    )
}
