import { type FC, memo, useCallback } from 'react'

import styles from './ArticlesPage.module.scss'
import { cls } from 'shared/lib/classNames'
import { ArticleList } from 'entities/Article'
import { DynamicModuleLoader, type ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import { articlesPageActions, articlesPageReducer, getArticles } from '../model/slice/articlesPageSlice'
import { useAppDispatch } from 'shared/hooks/useAppDispatch'
import { useInitialEffect } from 'shared/hooks/useInitialEffect'
import { fetchArticles } from '../model/services/fetchArticles/fetchArticles'
import { useSelector } from 'react-redux'
import { getArticlesError, getArticlesIsLoading, getArticlesView } from '../model/selectors/articlesPage'
import { ArticlesViewSelector } from 'features/ArticlesViewSelector'
import { Page } from 'widgets/Page'
import { fetchNextArticlesPage } from '../model/services/fetchNextArticlesPage/fetchNextArticlesPage'

interface ArticlesPageProps {
    className?: string
}

const reducers: ReducersList = {
    articlesPage: articlesPageReducer
}

const ArticlesPage: FC<ArticlesPageProps> = ({ className }) => {
    const dispatch = useAppDispatch()

    const articles = useSelector(getArticles.selectAll)
    const isLoading = useSelector(getArticlesIsLoading)
    const error = useSelector(getArticlesError)
    const view = useSelector(getArticlesView)

    useInitialEffect(() => {
        void dispatch(articlesPageActions.initView())
        void dispatch(fetchArticles({
            page: 1
        }))
    })

    const onPageScrolled = useCallback(() => {
        void dispatch(fetchNextArticlesPage())
    }, [dispatch])

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
            <Page onPageScrolled={onPageScrolled}>
                <ArticlesViewSelector view={view} />
                <div className={cls(styles.articlesPage, className)}>
                    <ArticleList
                        articles={articles}
                        isLoading={isLoading}
                        error={error}
                        view={view}
                    />
                </div>
            </Page>
        </DynamicModuleLoader>

    )
}

export default memo(ArticlesPage)
