import { type FC, memo } from 'react'

import { cls } from '@/shared/lib/classNames'
import { useGetNotificationsQuery } from '../../api/notificationApi'
import { VStack } from '@/shared/ui/Stack'
import { NotificationItem } from '../NotificationItem/NotificationItem'
import { Skeleton } from '@/shared/ui/Skeleton/Skeleton'

interface NotificationListProps {
    className?: string
}

export const NotificationList: FC<NotificationListProps> = memo(({ className }) => {
    const { data: notifications, isLoading, error } = useGetNotificationsQuery(null, {
        pollingInterval: 5000
    })

    if (isLoading) {
        return (
            <VStack
                max
                className={cls(className)}
                gap={8}
            >
                <Skeleton width={'100%'} height={80} borderRadius={8} />
                <Skeleton width={'100%'} height={80} borderRadius={8}/>
                <Skeleton width={'100%'} height={80} borderRadius={8} />
            </VStack>
        )
    }

    return (
        <VStack
            max
            className={cls(className)}
            gap={8}
        >
            {notifications?.map(notification =>
                <NotificationItem key={notification.id} notification={notification} />
            )}
        </VStack>
    )
})
