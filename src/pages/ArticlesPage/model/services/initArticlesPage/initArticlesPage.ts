import { createAsyncThunk } from '@reduxjs/toolkit'
import { type ThunkApi } from 'app/providers/StoreProvider'
import {
    getArticlesOrder,
    getArticlesPageInitiated,
    getArticlesSearch,
    getArticlesSort
} from '../../selectors/articlesPage'
import { articlesPageActions } from '../../slice/articlesPageSlice'
import { fetchArticles } from '../fetchArticles/fetchArticles'
import { type Order } from 'shared/types/sort'
import { type ArticleSortType } from 'entities/Article/model/types/article'
import { addQueryParams } from 'shared/lib/url/addQueryParams/addQueryParams'

export const initArticlesPage = createAsyncThunk<void, URLSearchParams, ThunkApi<string> >(
    'articlesPage/initArticlesPage',
    async (searchParams, thunkAPI) => {
        const { getState, dispatch } = thunkAPI

        const initiated = getArticlesPageInitiated(getState())
        const sort = getArticlesSort(getState())
        const order = getArticlesOrder(getState())
        const search = getArticlesSearch(getState())

        if (!initiated) {
            const order = searchParams.get('order') as Order
            const sort = searchParams.get('sort') as ArticleSortType
            const search = searchParams.get('search')

            if (order) {
                dispatch(articlesPageActions.setOrder(order))
            }

            if (sort) {
                dispatch(articlesPageActions.setSort(sort))
            }

            if (search) {
                dispatch(articlesPageActions.setSearch(search))
            }

            void dispatch(articlesPageActions.initView())
            void dispatch(fetchArticles({}))
        }

        addQueryParams({ sort, order, search })
    }
)
