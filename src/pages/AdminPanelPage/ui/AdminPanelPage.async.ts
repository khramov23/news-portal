import { lazy } from 'react'

export const AdminPanelPageAsync = lazy(async () => await new Promise((resolve) => {
    setTimeout(() => {
        // @ts-expect-error this is necessary and will be deleted
        resolve(import('./AdminPanelPage'))
    }, 1000)
}))
