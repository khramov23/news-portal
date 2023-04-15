import { type FC, type MutableRefObject, type ReactNode, type UIEvent, useLayoutEffect, useRef } from 'react'

import styles from './Page.module.scss'
import { cls } from 'shared/lib/classNames'
import { useInfiniteScroll } from 'shared/hooks/useInfiniteScroll'
import { useAppDispatch } from 'shared/hooks/useAppDispatch'
import { scrollRestorationActions } from 'widgets/ScrollRestoration/model/slice/scrollRestoratoinSlice'
import { useLocation } from 'react-router'
import { useThrottle } from 'shared/hooks/useThrottle'
import { useSelector } from 'react-redux'
import { getScrollByPath } from 'widgets/ScrollRestoration'

interface PageProps {
    className?: string
    children: ReactNode
    onPageScrolled?: () => void
}

export const Page: FC<PageProps> = ({ className, children, onPageScrolled }) => {
    const dispatch = useAppDispatch()
    const { pathname } = useLocation()

    const elementRef = useRef() as MutableRefObject<HTMLDivElement>
    const wrapperRef = useRef() as MutableRefObject<HTMLElement>

    const scrollTop = useSelector(getScrollByPath(pathname))

    useInfiniteScroll({
        elementRef,
        wrapperRef,
        onPageScrolled
    })

    useLayoutEffect(() => {
        wrapperRef.current.scrollTop = scrollTop
    })

    const onScroll = useThrottle((e: UIEvent<HTMLElement>) => {
        void dispatch(scrollRestorationActions.setScrollPosition({
            path: pathname,
            position: e.currentTarget.scrollTop
        }))
    }, 500)

    return (
        <section
            onScroll={onScroll}
            ref={wrapperRef}
            className={cls(styles.page, className)}
        >
            {children}
            <div ref={elementRef} />
        </section>
    )
}
