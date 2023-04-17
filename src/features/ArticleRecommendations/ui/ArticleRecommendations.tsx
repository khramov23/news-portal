import { type FC, memo } from 'react'
import { articleRecommendationsReducer, getArticleRecommendations } from '../model/slice/articleRecommedationsSlice'
import { useSelector } from 'react-redux'
import { ArticleList, ArticleView } from 'entities/Article'
import { useInitialEffect } from 'shared/hooks/useInitialEffect'
import { useAppDispatch } from 'shared/hooks/useAppDispatch'
import { fetchArticleRecommendations } from '../model/services/fetchArticleRecommendations/fetchArticleRecommendations'
import {
    getArticleRecommendationsError,
    getArticleRecommendationsIsLoading
} from '../model/selectors/articleRecommendationsSelectors'
import { DynamicModuleLoader, type ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'

const reducers: ReducersList = {
    articleRecommendations: articleRecommendationsReducer
}

interface ArticleRecommendationsProps {
    className?: string
}

export const ArticleRecommendations: FC<ArticleRecommendationsProps> = memo(({ className }) => {
    const dispatch = useAppDispatch()

    const isLoading = useSelector(getArticleRecommendationsIsLoading)
    const error = useSelector(getArticleRecommendationsError)
    const recommendations = useSelector(getArticleRecommendations.selectAll)

    useInitialEffect(() => {
        void dispatch(fetchArticleRecommendations())
    })

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount={true} >
            <div className={className}>
                <ArticleList
                    articles={recommendations}
                    view={ArticleView.ROW}
                    isLoading={isLoading}
                    error={error}
                    target={'_blank'}
                />
            </div>
        </DynamicModuleLoader>

    )
})
