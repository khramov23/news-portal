import { lazy } from 'react'

export const ArticlesPageAsync = lazy(async () => await new Promise((resolve) => {
    setTimeout(() => {
        // @ts-expect-error this is necessary and will be deleted
        resolve(import('./ArticlesPage'))
    }, 1000)
}))
