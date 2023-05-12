import { type FC, memo } from 'react'

import { cls } from '@/shared/lib/classNames'
import { Loader } from '@/shared/ui/Loader/Loader'

import styles from './PageLoader.module.scss'

interface PageLoaderProps {
    className?: string
}

export const PageLoader: FC<PageLoaderProps> = memo(({ className }) => {
    return (
        <div className={cls(styles.pageLoader, className)}>
            <Loader />
        </div>
    )
})
