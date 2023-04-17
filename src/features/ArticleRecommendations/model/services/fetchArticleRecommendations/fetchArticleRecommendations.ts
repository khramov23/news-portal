import { createAsyncThunk } from '@reduxjs/toolkit'
import { type Article } from 'entities/Article'
import { type ThunkApi } from 'app/providers/StoreProvider'

export const fetchArticleRecommendations = createAsyncThunk<Article[], void, ThunkApi<string> >(
    'articleRecommendations/fetchArticleRecommendations',
    async (_, thunkAPI) => {
        const { extra, rejectWithValue } = thunkAPI

        try {
            const response = await extra.api.get<Article[]>('/articles', {
                params: {
                    _limit: 4
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
