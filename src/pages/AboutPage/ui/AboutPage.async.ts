import { lazy } from 'react'

export const AboutPageAsync = lazy(async () => await new Promise((resolve) => {
    setTimeout(() => {
        // @ts-expect-error this is necessary and will be deleted
        resolve(import('./AboutPage'))
    }, 1000)
}))
