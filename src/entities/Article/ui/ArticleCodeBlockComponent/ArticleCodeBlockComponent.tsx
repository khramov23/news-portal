import { type FC } from 'react'

import styles from './ArticleCodeBlockComponent.module.scss'
import { cls } from 'shared/lib/classNames'

interface ArticleCodeBlockComponentProps {
    className?: string
}

export const ArticleCodeBlockComponent: FC<ArticleCodeBlockComponentProps> = ({ className }) => {
    return (
        <div className={cls(styles.articleCodeBlockComponent, className)}>

        </div>
    )
}
