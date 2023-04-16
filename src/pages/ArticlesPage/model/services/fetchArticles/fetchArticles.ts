import { createAsyncThunk } from '@reduxjs/toolkit'
import { type Article } from 'entities/Article'
import { type ThunkApi } from 'app/providers/StoreProvider'
import {
    getArticlesOrder,
    getArticlesPageLimit,
    getArticlesPageNum,
    getArticlesSearch,
    getArticlesSort
} from '../../selectors/articlesPage'
import { addQueryParams } from 'shared/lib/url/addQueryParams/addQueryParams'

interface FetchArticlesProps {
    replace?: boolean
}

export const fetchArticles = createAsyncThunk<Article[], FetchArticlesProps, ThunkApi<string> >(
    'articlesPage/fetchArticles',
    async (_, thunkAPI) => {
        const { extra, rejectWithValue, getState } = thunkAPI

        const limit = getArticlesPageLimit(getState())
        const page = getArticlesPageNum(getState())
        const order = getArticlesOrder(getState())
        const sort = getArticlesSort(getState())
        const search = getArticlesSearch(getState())

        try {
            addQueryParams({ search, sort, order })
            const response = await extra.api.get<Article[]>('/articles', {
                params: {
                    _expand: 'user',
                    _page: page,
                    _limit: limit,
                    _sort: sort,
                    _order: order,
                    q: search
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
