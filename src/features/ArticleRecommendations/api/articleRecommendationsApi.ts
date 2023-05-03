import { rtkApi } from 'shared/api/rtk'

const articleRecommendationsApi = rtkApi.injectEndpoints({
    endpoints: (build) => ({
        getArticleRecommendations: build.query({
            query: (limit) => ({
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
