import { rtkApi } from '@/shared/api/rtk'
import type { ArticleRating } from '../model/types/articleRating'

interface GetArticleRatingParams {
    userId: string
    articleId: string
}

interface RateArticleBody {
    userId: string
    articleId: string
    stars: number
    feedback?: string
}

const articleRecommendationsApi = rtkApi.injectEndpoints({
    endpoints: (build) => ({
        getArticleRating: build.query<ArticleRating[], GetArticleRatingParams>({
            query: ({ articleId, userId }) => ({
                url: '/article-ratings',
                params: {
                    userId,
                    articleId
                }
            })
        }),
        rateArticle: build.mutation<void, RateArticleBody>({
            query: ({ articleId, userId, stars, feedback }) => ({
                url: '/article-ratings',
                method: 'POST',
                body: {
                    articleId,
                    userId,
                    stars,
                    feedback: feedback || ''
                }
            })
        })
    }),
    overrideExisting: false
})

export const { useGetArticleRatingQuery, useRateArticleMutation } = articleRecommendationsApi
