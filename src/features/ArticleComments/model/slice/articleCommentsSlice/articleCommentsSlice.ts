import { createEntityAdapter, createSlice, type PayloadAction } from '@reduxjs/toolkit'
import { type StateSchema } from 'app/providers/StoreProvider'
import { type ArticleCommentsSchema } from '../../types/articleCommentsSchema'
import { fetchArticleCommentsById } from '../../services/fetchArticleCommentsById/fetchArticleCommentsById'
import { type Comment } from 'entities/Comment'

const commentsAdapter = createEntityAdapter<Comment>({
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
    reducers: {
        addComment: (state, action: PayloadAction<Comment>) => {
            commentsAdapter.addOne(state, action.payload)
        }
    },
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
