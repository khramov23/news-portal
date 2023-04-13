import { type FC, memo } from 'react'

import styles from './ArticlesPage.module.scss'
import { cls } from 'shared/lib/classNames'
import { useTranslation } from 'react-i18next'
import { ArticleList, articleMock } from 'entities/Article'

interface ArticlesPageProps {
    className?: string
}

const ArticlesPage: FC<ArticlesPageProps> = ({ className }) => {
    const { t } = useTranslation('articles')

    return (
        <div className={cls(styles.articlesPage, className)}>
            <ArticleList articles={new Array(20).fill(articleMock)} />
        </div>
    )
}

export default memo(ArticlesPage)
