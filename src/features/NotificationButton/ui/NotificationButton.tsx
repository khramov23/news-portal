import { type FC, memo, useMemo } from 'react'

import styles from './NotificationButton.module.scss'
import { Popover } from 'shared/ui/Popups'
import { NotificationList } from 'entities/Notification'
import { Button, ButtonTheme } from 'shared/ui/Button/Button'
import { Icon } from 'shared/ui/Icon/Icon'
import NotificationIcon from 'shared/assets/icons/notifications.svg'

interface NotificationButtonProps {
    className?: string
}

export const NotificationButton: FC<NotificationButtonProps> = memo(({ className }) => {
    const triggerElement = useMemo(() => <Button theme={ButtonTheme.CLEAR}>
        <Icon Svg={NotificationIcon} theme={'inverted'} />
    </Button>, [])

    return (
        <Popover trigger={triggerElement}>
            <NotificationList className={styles.notifications} />
        </Popover>
    )
})
