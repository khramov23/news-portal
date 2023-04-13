import { type FC, memo, type ReactNode } from 'react'

import styles from './ArticleList.module.scss'
import { cls } from 'shared/lib/classNames'
import { type Article, ArticleView } from '../../model/types/article'
import { Text } from 'shared/ui/Text/Text'
import { ArticleListItem } from 'entities/Article/ui/ArticleListItem/ArticleListItem'
import { useTranslation } from 'react-i18next'
import { ArticleListItemSkeleton } from 'entities/Article/ui/ArticleListItem/ArticleListItemSkeleton'

interface ArticleListProps {
    className?: string
    articles: Article[]
    isLoading?: boolean
    error?: string
    view?: ArticleView
}

const getSkeletons = (view: ArticleView): ReactNode => <>
    {
        new Array(view === ArticleView.BIG ? 3 : 12)
            .fill(0)
            .map((_, index) =>
                <ArticleListItemSkeleton key={index} view={view} />
            )
    }
</>

export const ArticleList: FC<ArticleListProps> = memo((props) => {
    const { articles, className, isLoading, view = ArticleView.BIG, error } = props
    const { t } = useTranslation()

    if (isLoading) {
        return (
            <div className={cls(styles.articleList, className, styles[view])}>
                {getSkeletons(view)}
            </div>
        )
    }

    if (error) {
        return (
            <div className={cls(styles.articleList, className, styles[view])}>
                <Text
                    title={t('Произошла ошибка при загрузке статей')}
                    text={t('Попробуйте перезагрузить страницу')}
                />
            </div>
        )
    }

    return (
        <div className={cls(styles.articleList, className, styles[view])}>
            {articles.length > 0
                ? (
                    articles.map(article =>
                        <ArticleListItem
                            key={article.id}
                            article={article}
                            view={view}
                        />
                    )
                )
                : (
                    <Text title={t('Статьи отсутствуют')} />
                )}
        </div>
    )
})
