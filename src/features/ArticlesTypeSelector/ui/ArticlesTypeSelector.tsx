import { type FC, memo } from 'react'

import styles from './ArticlesTypeSelector.module.scss'
import { cls } from 'shared/lib/classNames'

interface ArticlesTypeSelectorProps {
    className?: string
}

export const ArticlesTypeSelector: FC<ArticlesTypeSelectorProps> = memo(({ className }) => {
    return (
        <div className={cls(styles.articlesTypeSelector, className)}>
        </div>
    )
})
