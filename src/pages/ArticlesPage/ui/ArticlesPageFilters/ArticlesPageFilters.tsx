import { type FC, memo, useCallback } from 'react'

import styles from './ArticlesPageFilters.module.scss'
import { cls } from 'shared/lib/classNames'
import { ArticlesViewSelector } from 'features/ArticlesViewSelector'
import { useSelector } from 'react-redux'
import {
    getArticlesOrder,
    getArticlesSearch,
    getArticlesSort,
    getArticlesView
} from 'pages/ArticlesPage/model/selectors/articlesPage'
import { useTranslation } from 'react-i18next'
import { Card } from 'shared/ui/Card/Card'
import { Input } from 'shared/ui/Input/Input'
import { ArticlesSortSelectors } from 'features/ArticlesSortSelector'
import { type ArticleSortType } from 'entities/Article/model/types/article'
import { articlesPageActions } from 'pages/ArticlesPage/model/slice/articlesPageSlice'
import { type Order } from 'shared/types/sort'
import { useAppDispatch } from 'shared/hooks/useAppDispatch'
import { fetchArticles } from '../../model/services/fetchArticles/fetchArticles'
import { useDebounce } from 'shared/hooks/useDebounce'

interface ArticlesPageFiltersProps {
    className?: string
}

export const ArticlesPageFilters: FC<ArticlesPageFiltersProps> = memo(({ className }) => {
    const dispatch = useAppDispatch()

    const { t } = useTranslation()
    const view = useSelector(getArticlesView)
    const order = useSelector(getArticlesOrder)
    const sort = useSelector(getArticlesSort)
    const search = useSelector(getArticlesSearch)

    const fetchArticlesOnFilter = useCallback(() => {
        void dispatch(fetchArticles({ replace: true }))
    }, [dispatch])

    const debouncedFetchArticles = useDebounce(fetchArticlesOnFilter, 500)

    const onChangeSort = useCallback((value: ArticleSortType) => {
        dispatch(articlesPageActions.setSort(value))
        dispatch(articlesPageActions.setPage(1))
        fetchArticlesOnFilter()
    }, [dispatch, fetchArticlesOnFilter])

    const onChangeOrder = useCallback((value: Order) => {
        dispatch(articlesPageActions.setOrder(value))
        dispatch(articlesPageActions.setPage(1))
        fetchArticlesOnFilter()
    }, [dispatch, fetchArticlesOnFilter])

    const onChangeSearch = useCallback((value: string) => {
        dispatch(articlesPageActions.setSearch(value))
        dispatch(articlesPageActions.setPage(1))
        debouncedFetchArticles()
    }, [dispatch, debouncedFetchArticles])

    return (
        <div className={cls(styles.articlesPageFilters, className)}>
            <div className={styles.sortWrapper}>
                <ArticlesSortSelectors
                    sort={sort}
                    order={order}
                    onChangeSort={onChangeSort}
                    onChangeOrder={onChangeOrder}
                />
                <ArticlesViewSelector view={view} />
            </div>
            <Card className={styles.searchCard}>
                <Input
                    placeholder={t('Поиск')}
                    value={search}
                    onChange={onChangeSearch}
                />
            </Card>
        </div>
    )
})
