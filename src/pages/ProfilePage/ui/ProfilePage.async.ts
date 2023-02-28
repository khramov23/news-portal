import { lazy } from 'react'

export const ProfilePageAsync = lazy(async () => await new Promise((resolve) => {
    setTimeout(() => {
        // @ts-expect-error this is necessary and will be deleted
        resolve(import('./ProfilePage'))
    }, 1000)
}))
