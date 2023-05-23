import { type FC, memo, useCallback } from 'react'

import { useSelector } from 'react-redux'
import { useSearchParams } from 'react-router-dom'

import { ArticleList } from '@/entities/Article'
import { useAppDispatch } from '@/shared/hooks/useAppDispatch'
import { useInitialEffect } from '@/shared/hooks/useInitialEffect'
import { DynamicModuleLoader, type ReducersList } from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import { Page } from '@/widgets/Page'

import styles from './ArticlesPage.module.scss'
import { getArticlesError, getArticlesIsLoading, getArticlesView } from '../../model/selectors/articlesPage'
import { fetchNextArticlesPage } from '../../model/services/fetchNextArticlesPage/fetchNextArticlesPage'
import { initArticlesPage } from '../../model/services/initArticlesPage/initArticlesPage'
import { articlesPageReducer, getArticles } from '../../model/slice/articlesPageSlice'
import { ArticlesPageFilters } from '../ArticlesPageFilters/ArticlesPageFilters'

interface ArticlesPageProps {
    className?: string
}

const reducers: ReducersList = {
    articlesPage: articlesPageReducer
}

const ArticlesPage: FC<ArticlesPageProps> = () => {
    const dispatch = useAppDispatch()

    const articles = useSelector(getArticles.selectAll)
    const isLoading = useSelector(getArticlesIsLoading)
    const error = useSelector(getArticlesError)
    const view = useSelector(getArticlesView)

    const [searchParams] = useSearchParams()

    useInitialEffect(() => {
        void dispatch(initArticlesPage(searchParams))
    })

    const onPageScrolled = useCallback(() => {
        void dispatch(fetchNextArticlesPage())
    }, [dispatch])

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount={false} >
            <Page onPageScrolled={onPageScrolled} data-testid={'ArticlesPage'}>
                <ArticlesPageFilters />
                <ArticleList
                    articles={articles}
                    isLoading={isLoading}
                    error={error}
                    view={view}
                    className={styles.list}
                />
            </Page>
        </DynamicModuleLoader>

    )
}

export default memo(ArticlesPage)
