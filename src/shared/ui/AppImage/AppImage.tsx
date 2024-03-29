import { ImgHTMLAttributes, memo, ReactNode, useLayoutEffect, useState } from 'react'

import { cls } from '@/shared/lib/classNames'

interface AppImageProps extends ImgHTMLAttributes<HTMLImageElement> {
    className?: string
    fallback?: ReactNode
    errorFallback?: ReactNode
}

export const AppImage = memo((props: AppImageProps) => {
    const { className, fallback, errorFallback, src, ...otherProps } = props

    const [isLoading, setIsLoading] = useState(true)
    const [isError, setIsError] = useState(false)

    useLayoutEffect(() => {
        const img = new Image()
        img.src = src ?? ''
        img.onload = () => { setIsLoading(false) }
        img.onerror = () => {
            setIsLoading(false)
            setIsError(true)
        }
    }, [src])

    if (isLoading && fallback) {
        return <>{fallback}</>
    }

    if (isError && errorFallback) {
        return <>{errorFallback}</>
    }

    return (
        <img
            className={cls(className)}
            src={src}
            {...otherProps}
        />
    )
})
