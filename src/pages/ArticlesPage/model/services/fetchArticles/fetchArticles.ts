import { createAsyncThunk } from '@reduxjs/toolkit'
import { type Article } from 'entities/Article'
import { type ThunkApi } from 'app/providers/StoreProvider'

export const fetchArticles = createAsyncThunk<Article[], void, ThunkApi<string> >(
    'articlesPage/fetchArticles',
    async (_, thunkAPI) => {
        const { extra, rejectWithValue } = thunkAPI

        try {
            const response = await extra.api.get<Article[]>('/articles', {
                params: {
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
