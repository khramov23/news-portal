import { type FC } from 'react'

import styles from './ArticleTextBlockComponent.module.scss'
import { cls } from 'shared/lib/classNames'

interface ArticleTextBlockComponentProps {
    className?: string
}

export const ArticleTextBlockComponent: FC<ArticleTextBlockComponentProps> = ({ className }) => {
    return (
        <div className={cls(styles.articleTextBlockComponent, className)}>

        </div>
    )
}
