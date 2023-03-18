import { lazy } from 'react'

export const ArticleDetailsPageAsync = lazy(async () => await new Promise((resolve) => {
    setTimeout(() => {
        // @ts-expect-error this is necessary and will be deleted
        resolve(import('./ArticleDetailsPage'))
    }, 1000)
}))
