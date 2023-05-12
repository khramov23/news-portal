import { type Article } from '@/entities/Article'
import { rtkApi } from '@/shared/api/rtk'

const articleRecommendationsApi = rtkApi.injectEndpoints({
    endpoints: (build) => ({
        getArticleRecommendations: build.query<Article[], number>({
            query: (limit: number) => ({
                url: '/articles',
                params: {
                    _limit: limit
                }
            })
        })
    }),
    overrideExisting: false
})

export const { useGetArticleRecommendationsQuery } = articleRecommendationsApi
