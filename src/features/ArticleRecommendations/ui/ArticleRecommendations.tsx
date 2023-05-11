import { type FC, memo } from 'react'
import { ArticleList, ArticleView } from '@/entities/Article'
import { useGetArticleRecommendationsQuery } from '../api/articleRecommendationsApi'

interface ArticleRecommendationsProps {
    className?: string
}

export const ArticleRecommendations: FC<ArticleRecommendationsProps> = memo(({ className }) => {
    const { data: recommendations, isLoading, error } = useGetArticleRecommendationsQuery(4)

    console.log(recommendations)

    return (
        <div className={className}>
            <ArticleList
                articles={recommendations}
                view={ArticleView.ROW}
                isLoading={isLoading}
                error={error}
                target={'_blank'}
            />
        </div>

    )
})
