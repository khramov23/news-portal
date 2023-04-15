import { createAsyncThunk } from '@reduxjs/toolkit'
import { type Article } from 'entities/Article'
import { type ThunkApi } from 'app/providers/StoreProvider'
import { getArticlesPageLimit } from '../../selectors/articlesPage'

interface FetchArticlesProps {
    page: number
}

export const fetchArticles = createAsyncThunk<Article[], FetchArticlesProps, ThunkApi<string> >(
    'articlesPage/fetchArticles',
    async (props, thunkAPI) => {
        const { extra, rejectWithValue, getState } = thunkAPI
        const { page } = props

        const limit = getArticlesPageLimit(getState())

        try {
            const response = await extra.api.get<Article[]>('/articles', {
                params: {
                    _expand: 'user',
                    _page: page,
                    _limit: limit
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
