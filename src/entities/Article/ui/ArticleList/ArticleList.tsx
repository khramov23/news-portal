import { type FC, type HTMLAttributeAnchorTarget, memo, type ReactNode } from 'react'

import { type SerializedError } from '@reduxjs/toolkit'
import { type FetchBaseQueryError } from '@reduxjs/toolkit/query'
import { useTranslation } from 'react-i18next'

import { cls } from '@/shared/lib/classNames'
import { Text } from '@/shared/ui/Text'

import styles from './ArticleList.module.scss'
import { type Article, ArticleView } from '../../model/types/article'
import { ArticleListItem } from '../ArticleListItem/ArticleListItem'
import { ArticleListItemSkeleton } from '../ArticleListItem/ArticleListItemSkeleton'

interface ArticleListProps {
    className?: string
    articles?: Article[]
    isLoading?: boolean
    error?: FetchBaseQueryError | SerializedError | string
    view?: ArticleView
    target?: HTMLAttributeAnchorTarget
}

const getSkeletons = (view: ArticleView): ReactNode => {
    let skeletonsNumber: number
    switch (view) {
        case ArticleView.BIG:
            skeletonsNumber = 3
            break
        case ArticleView.ROW:
            skeletonsNumber = 4
            break
        case ArticleView.SMALL:
            skeletonsNumber = 12
            break
        default:
            skeletonsNumber = 6
    }

    return <>
        {
            new Array(skeletonsNumber)
                .fill(0)
                .map((_, index) =>
                    <ArticleListItemSkeleton key={index} view={view} />
                )
        }
    </>
}

export const ArticleList: FC<ArticleListProps> = memo((props) => {
    const {
        articles,
        className,
        isLoading,
        view = ArticleView.BIG,
        error,
        target = '_self'
    } = props
    const { t } = useTranslation()

    const renderArticle = (article: Article) =>
        <ArticleListItem
            key={article.id}
            article={article}
            view={view}
            target={target}
        />

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

    console.log(articles)

    return (
        <div className={cls(styles.articleList, className, styles[view])}>
            {articles && articles.length > 0
                ? articles.map(renderArticle)
                : null
            }
            {isLoading && getSkeletons(view)}
            {!isLoading && articles?.length === 0 && <Text title={t('Статьи отсутствуют')} />}
        </div>
    )
})
