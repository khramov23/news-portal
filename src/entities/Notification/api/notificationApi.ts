import { rtkApi } from 'shared/api/rtk'
import { type Notification } from '../model/types/notifications'

const notificationApi = rtkApi.injectEndpoints({
    endpoints: (build) => ({
        getNotifications: build.query<Notification[], null>({
            query: () => ({
                url: '/notifications'
            })
        })
    }),
    overrideExisting: false
})

export const { useGetNotificationsQuery } = notificationApi
