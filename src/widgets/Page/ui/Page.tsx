import { type FC, type MutableRefObject, type ReactNode, useRef } from 'react'

import styles from './Page.module.scss'
import { cls } from 'shared/lib/classNames'
import { useInfiniteScroll } from 'shared/hooks/useInfiniteScroll'

interface PageProps {
    className?: string
    children: ReactNode
    onPageScrolled?: () => void
}

export const Page: FC<PageProps> = ({ className, children, onPageScrolled }) => {
    const elementRef = useRef() as MutableRefObject<HTMLDivElement>
    const wrapperRef = useRef() as MutableRefObject<HTMLElement>

    useInfiniteScroll({
        elementRef,
        wrapperRef,
        onPageScrolled
    })

    return (
        <section ref={wrapperRef} className={cls(styles.page, className)}>
            {children}
            <div ref={elementRef} />
        </section>
    )
}
