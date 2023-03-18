import { type FC } from 'react'

import styles from './ArticleImageBlockComponent.module.scss'
import { cls } from 'shared/lib/classNames'

interface ArticleImageBlockComponentProps {
    className?: string
}

export const ArticleImageBlockComponent: FC<ArticleImageBlockComponentProps> = ({ className }) => {
    return (
        <div className={cls(styles.articleImageBlockComponent, className)}>

        </div>
    )
}
