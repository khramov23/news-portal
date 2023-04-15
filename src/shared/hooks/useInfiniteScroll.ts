import { type MutableRefObject, useEffect, useRef } from 'react'

export interface UseInfiniteScrollOptions {
    onPageScrolled?: () => void
    wrapperRef: MutableRefObject<HTMLElement>
    elementRef: MutableRefObject<HTMLElement>
}

export const useInfiniteScroll = (options: UseInfiniteScrollOptions) => {
    const { onPageScrolled, elementRef, wrapperRef } = options

    const observer = useRef<IntersectionObserver | null>(null)

    useEffect(() => {
        const element = elementRef.current
        const wrapper = wrapperRef.current

        if (onPageScrolled) {
            const options = {
                root: wrapper,
                rootMargin: '40px',
                threshold: 1.0
            }

            const callback: IntersectionObserverCallback = ([entry]) => {
                if (entry.isIntersecting) {
                    onPageScrolled()
                }
            }

            observer.current = new IntersectionObserver(callback, options)
            observer.current.observe(element)
        }

        return () => {
            // eslint-disable-next-line react-hooks/exhaustive-deps
            observer.current?.unobserve(element)
        }
    }, [elementRef, onPageScrolled, wrapperRef])
}
