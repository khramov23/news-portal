import { type FC, memo } from 'react'

import styles from './NotificationItem.module.scss'
import { cls } from 'shared/lib/classNames'
import type { Notification } from '../../model/types/notifications'
import { Card } from 'shared/ui/Card/Card'
import { Text } from 'shared/ui/Text/Text'

interface NotificationItemProps {
    className?: string
    notification: Notification
}

export const NotificationItem: FC<NotificationItemProps> = memo((props) => {
    const { className, notification } = props

    const content = (
        <Card theme={'outlined'} className={cls(styles.notificationItem, className)}>
            <Text title={notification.title} text={notification.description} />
        </Card>
    )

    if (notification.href) {
        return (
            <a
                href={notification.href}
                target={'_blank'}
                rel="noreferrer"
                className={styles.link}
            >
                {content}
            </a>
        )
    }

    return content
})
