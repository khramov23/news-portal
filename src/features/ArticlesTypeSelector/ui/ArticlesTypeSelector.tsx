import { type FC, memo } from 'react'

import { cls } from '@/shared/lib/classNames'

import styles from './ArticlesTypeSelector.module.scss'

interface ArticlesTypeSelectorProps {
    className?: string
}

export const ArticlesTypeSelector: FC<ArticlesTypeSelectorProps> = memo(({ className }) => {
    return (
        <div className={cls(styles.articlesTypeSelector, className)}>
        </div>
    )
})
