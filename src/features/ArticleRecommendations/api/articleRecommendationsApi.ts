import { rtkApi } from 'shared/api/rtk'
import { type Article } from 'entities/Article'

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
