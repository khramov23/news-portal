import { createEntityAdapter, createSlice } from '@reduxjs/toolkit'
import { type StateSchema } from 'app/providers/StoreProvider'
import { type ArticleRecommendationsSchema } from '../types/articleRecommendationsSchema'
import { type Article } from 'entities/Article'
import {
    fetchArticleRecommendations
} from 'features/ArticleRecommendations/model/services/fetchArticleRecommendations/fetchArticleRecommendations'

const articleRecommendations = createEntityAdapter<Article>({
    selectId: (comment) => comment.id
})

export const getArticleRecommendations = articleRecommendations.getSelectors<StateSchema>(
    (state) => state.articleRecommendations || articleRecommendations.getInitialState()
)

const articleRecommendationsSlice = createSlice({
    name: 'articleRecommendations',
    initialState: articleRecommendations.getInitialState<ArticleRecommendationsSchema>({
        isLoading: false,
        error: undefined,
        ids: [],
        entities: {}
    }),
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchArticleRecommendations.pending, (state) => {
                state.isLoading = true
                state.error = undefined
            })
            .addCase(fetchArticleRecommendations.fulfilled, (state, action) => {
                state.isLoading = false
                articleRecommendations.setAll(state, action.payload)
            })
            .addCase(fetchArticleRecommendations.rejected, (state, action) => {
                state.isLoading = false
                state.error = action.payload
            })
    }
})

export const { actions: articleRecommendationsActions } = articleRecommendationsSlice
export const { reducer: articleRecommendationsReducer } = articleRecommendationsSlice
