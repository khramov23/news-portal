import { type FC, memo, useCallback, useMemo } from 'react'

import styles from './ArticlesPageFilters.module.scss'
import { cls } from '@/shared/lib/classNames'
import { ArticlesViewSelector } from '@/features/ArticlesViewSelector'
import { useSelector } from 'react-redux'
import {
    getArticlesOrder,
    getArticlesSearch,
    getArticlesSort,
    getArticlesType,
    getArticlesView
} from '@/pages/ArticlesPage/model/selectors/articlesPage'
import { useTranslation } from 'react-i18next'
import { Card } from '@/shared/ui/Card/Card'
import { Input } from '@/shared/ui/Input/Input'
import { ArticlesSortSelectors } from '@/features/ArticlesSortSelector'
import { type ArticleSortType, ArticleType } from '@/entities/Article/model/types/article'
import { articlesPageActions } from '@/pages/ArticlesPage/model/slice/articlesPageSlice'
import { type Order } from '@/shared/types/sort'
import { useAppDispatch } from '@/shared/hooks/useAppDispatch'
import { fetchArticles } from '../../model/services/fetchArticles/fetchArticles'
import { useDebounce } from '@/shared/hooks/useDebounce'
import { type TabItem, Tabs } from '@/shared/ui/Tabs/Tabs'

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
    const type = useSelector(getArticlesType)

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

    const items = useMemo<Array<TabItem<ArticleType>>>(() => [
        {
            value: ArticleType.ALL,
            content: t('Все статьи')
        },
        {
            value: ArticleType.ECONOMICS,
            content: t('Экономика')
        },
        {
            value: ArticleType.IT,
            content: t('Информационные технологии')
        },
        {
            value: ArticleType.SCIENCE,
            content: t('Наука')
        }
    ], [t])

    const onTabClick = useCallback((value: ArticleType) => {
        dispatch(articlesPageActions.setPage(1))
        dispatch(articlesPageActions.setType(value))
        fetchArticlesOnFilter()
    }, [dispatch, fetchArticlesOnFilter])

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
            <Tabs
                items={items}
                value={type}
                onTabClick={onTabClick}
                className={styles.tabs}
            />
        </div>
    )
})
