import { createAsyncThunk } from '@reduxjs/toolkit'
import { type ThunkApi } from '@/app/providers/StoreProvider'
import { type Article } from '../../types/article'

export const fetchArticleData = createAsyncThunk<Article, string, ThunkApi<string>>(
    'article/fetchArticleData',
    async (articleId, thunkAPI) => {
        const { rejectWithValue, extra } = thunkAPI
        try {
            const response = await extra.api.get<Article>(`/articles/${articleId}`)

            if (!response.data) {
                throw new Error()
            }

            return response.data
        } catch (e) {
            return rejectWithValue('error')
        }
    }
)
