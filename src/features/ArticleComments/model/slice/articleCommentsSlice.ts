import { createEntityAdapter, createSlice, type PayloadAction } from '@reduxjs/toolkit'
import { type StateSchema } from 'app/providers/StoreProvider'
import { type ArticleCommentsSchema } from '../types/articleCommentsSchema'
import { fetchArticleCommentsById } from 'features/ArticleComments/model/services/fetchArticleCommentsById'
import { type Comment } from 'entities/Comment'

const commentsAdapter = createEntityAdapter<Comment>({
    // Assume IDs are stored in a field other than `book.id`
    selectId: (comment) => comment.id
})

export const getArticleComments = commentsAdapter.getSelectors<StateSchema>(
    (state) => state.articleComments || commentsAdapter.getInitialState()
)

const articleCommentsSlice = createSlice({
    name: 'books',
    initialState: commentsAdapter.getInitialState<ArticleCommentsSchema>({
        isLoading: false,
        error: undefined,
        ids: [],
        entities: {}
    }),
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchArticleCommentsById.pending, (state) => {
                state.isLoading = true
                state.error = undefined
            })
            .addCase(fetchArticleCommentsById.fulfilled, (state, action: PayloadAction<Comment[]>) => {
                state.isLoading = false
                commentsAdapter.setAll(state, action.payload)
            })
            .addCase(fetchArticleCommentsById.rejected, (state, action) => {
                state.isLoading = false
                state.error = action.payload
            })
    }
})

export const { actions: articleCommentsActions } = articleCommentsSlice
export const { reducer: articleCommentsReducer } = articleCommentsSlice
