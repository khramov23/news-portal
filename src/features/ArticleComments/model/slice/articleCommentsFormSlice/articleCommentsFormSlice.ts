import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import { type ArticleCommentsFormSchema } from '../../types/articleCommentsFormSchema'
import { addArticleComment } from '../../services/addArticleComment/addArticleComment'

const initialState: ArticleCommentsFormSchema = {
    isLoading: false,
    error: undefined,
    text: ''
}

export const articleCommentsFormSlice = createSlice({
    name: 'articleCommentsForm',
    initialState,
    reducers: {
        setText: (state, action: PayloadAction<string>) => {
            state.text = action.payload
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(addArticleComment.pending, (state) => {
                state.isLoading = true
                state.error = undefined
            })
            .addCase(addArticleComment.fulfilled, (state) => {
                state.isLoading = false
                state.text = ''
            })
            .addCase(addArticleComment.rejected, (state, action) => {
                state.isLoading = false
                state.error = action.payload
                state.text = ''
            })
    }
})

export const { actions: articleCommentsFormActions } = articleCommentsFormSlice
export const { reducer: articleCommentsFormReducer } = articleCommentsFormSlice
