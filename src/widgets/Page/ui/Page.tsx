import { type FC, type MutableRefObject, type ReactNode, type UIEvent, useLayoutEffect, useRef } from 'react'

import { useSelector } from 'react-redux'
import { useLocation } from 'react-router'

import { scrollRestorationActions, getScrollByPath } from '@/features/ScrollRestoration'
import { useAppDispatch } from '@/shared/hooks/useAppDispatch'
import { useInfiniteScroll } from '@/shared/hooks/useInfiniteScroll'
import { useThrottle } from '@/shared/hooks/useThrottle'
import { cls } from '@/shared/lib/classNames'
import { TestProps } from '@/shared/types'

import styles from './Page.module.scss'

interface PageProps extends TestProps {
    className?: string
    children: ReactNode
    onPageScrolled?: () => void
}

export const Page: FC<PageProps> = (props) => {
    const { className, children, onPageScrolled } = props

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
        // eslint-disable-next-line
    }, [])

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
            data-testid={props['data-testid'] ?? 'Page'}
        >
            {children}
            <div ref={elementRef} />
        </section>
    )
}
