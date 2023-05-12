import { createAsyncThunk } from '@reduxjs/toolkit'

import { type ThunkApi } from '@/app/providers/StoreProvider'
import { type Comment } from '@/entities/Comment'

export const fetchArticleCommentsById = createAsyncThunk<Comment[], string | undefined, ThunkApi<string>>(
    'articleComments/fetchArticleCommentsById',
    async (articleId, thunkAPI) => {
        const { rejectWithValue, extra } = thunkAPI

        if (!articleId) {
            rejectWithValue('error')
        }

        try {
            const response = await extra.api.get<Comment[]>('/comments', {
                params: {
                    articleId,
                    _expand: 'user'
                }
            })

            if (!response.data) {
                throw new Error()
            }

            return response.data
        } catch (e) {
            return rejectWithValue('error')
        }
    }
)
