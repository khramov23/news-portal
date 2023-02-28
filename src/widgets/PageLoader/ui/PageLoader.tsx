import { type FC, memo } from 'react'

import styles from './PageLoader.module.scss'
import { cls } from 'shared/lib/classNames'
import { Loader } from 'shared/ui/Loader/Loader'

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
