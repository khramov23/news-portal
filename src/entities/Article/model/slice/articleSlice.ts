import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import { type ArticleSchema } from '../types/articleSchema'
import { type Article } from '../types/article'
import { fetchArticleData } from '../services/fetchArticleData/fetchArticleData'

const initialState: ArticleSchema = {
    isLoading: false,
    error: undefined,
    data: undefined
}

export const articleSlice = createSlice({
    name: 'article',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchArticleData.pending, (state) => {
                state.isLoading = true
                state.error = undefined
            })
            .addCase(fetchArticleData.fulfilled, (state, action: PayloadAction<Article>) => {
                state.isLoading = false
                state.data = action.payload
            })
            .addCase(fetchArticleData.rejected, (state, action) => {
                state.isLoading = false
                state.error = action.payload
            })
    }
})

export const { actions: articleActions } = articleSlice
export const { reducer: articleReducer } = articleSlice
