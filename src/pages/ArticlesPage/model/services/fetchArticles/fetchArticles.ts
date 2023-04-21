import { createAsyncThunk } from '@reduxjs/toolkit'
import { type Article } from 'entities/Article'
import { type ThunkApi } from 'app/providers/StoreProvider'
import {
    getArticlesOrder,
    getArticlesPageLimit,
    getArticlesPageNum,
    getArticlesSearch,
    getArticlesSort,
    getArticlesType
} from '../../selectors/articlesPage'
import { addQueryParams } from 'shared/lib/url/addQueryParams/addQueryParams'
import { ArticleType } from 'entities/Article/model/types/article'

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
        const type = getArticlesType(getState())

        try {
            addQueryParams({ search, sort, order, type })
            const response = await extra.api.get<Article[]>('/articles', {
                params: {
                    _expand: 'user',
                    _page: page,
                    _limit: limit,
                    _sort: sort,
                    _order: order,
                    type: type === ArticleType.ALL ? undefined : type,
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

// /articles?_expand=user&_page=1&_limit=12&_sort=date&_order=asc&q=
// /articles?_expand=user&_page=1&_limit=12&_sort=date&_order=asc&q=
