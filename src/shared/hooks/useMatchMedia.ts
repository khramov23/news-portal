import { useCallback, useLayoutEffect, useState } from 'react'

const breakpoints = [
    '(max-width: 768px)',
    '(min-width: 769px)'
]

type Breakpoint = 'mobile' | 'desktop'
type UseMatchMediaReturn = {
    [key in Breakpoint]: boolean
}

export const useMatchMedia = (): UseMatchMediaReturn => {
    const mediaQueryList = breakpoints.map((query) => matchMedia(query))

    const getValues = useCallback(() => {
        return mediaQueryList.map((mql) => mql.matches)
    }
    , [mediaQueryList])

    const [values, setValues] = useState(getValues())

    useLayoutEffect(() => {
        const handler = () => { setValues(getValues()) }

        mediaQueryList.forEach((mql) => {
            mql.addEventListener('change', handler)
        })

        return () => {
            mediaQueryList.forEach((mql) => {
                mql.removeEventListener('change', handler)
            })
        }
    }, [getValues, mediaQueryList])

    const arr: Breakpoint[] = ['mobile', 'desktop']

    return arr.reduce(
        (acc, cur, index) => ({
            ...acc,
            [cur]: values[index]
        }),
        // eslint-disable-next-line
        {} as UseMatchMediaReturn
    )
}
