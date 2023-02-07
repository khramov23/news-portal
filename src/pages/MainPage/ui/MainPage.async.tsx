import { lazy } from 'react'

export const MainPageAsync = lazy(async () => await new Promise((resolve) => {
    setTimeout(() => {
    // @ts-expect-error this is necessary and will be deleted
        resolve(import('./MainPage'))
    }, 1000)
}))
