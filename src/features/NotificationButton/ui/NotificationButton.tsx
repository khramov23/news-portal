import { type FC, memo, useCallback, useState } from 'react'

import styles from './NotificationButton.module.scss'
import { Popover } from '@/shared/ui/Popups'
import { NotificationList } from '@/entities/Notification'
import { Button, ButtonTheme } from '@/shared/ui/Button/Button'
import { Icon } from '@/shared/ui/Icon/Icon'
import NotificationIcon from '@/shared/assets/icons/notifications.svg'
import { useMatchMedia } from '@/shared/hooks/useMatchMedia'
import { Drawer } from '@/shared/ui/Drawer/Drawer'

interface NotificationButtonProps {
    className?: string
}

export const NotificationButton: FC<NotificationButtonProps> = memo(({ className }) => {
    const { mobile } = useMatchMedia()
    const [isOpen, setIsOpen] = useState(false)

    const onCloseDrawer = useCallback(() => {
        setIsOpen(false)
    }, [])

    const onOpenDrawer = useCallback(() => {
        setIsOpen(true)
    }, [])

    const triggerElement = (
        <Button className={className} theme={ButtonTheme.CLEAR} onClick={onOpenDrawer}>
            <Icon Svg={NotificationIcon} theme={'inverted'} />
        </Button>
    )

    return mobile
        ? (
            <>
                {triggerElement}
                <Drawer isOpen={isOpen} onClose={onCloseDrawer} lazy>
                    <NotificationList />
                </Drawer>
            </>
        )
        : (
            <Popover trigger={triggerElement}>
                <NotificationList className={styles.notifications} />
            </Popover>
        )
})
