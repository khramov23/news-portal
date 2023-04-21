import { createAsyncThunk } from '@reduxjs/toolkit'
import { type ThunkApi } from 'app/providers/StoreProvider'
import {
    getArticlesOrder,
    getArticlesPageInitiated,
    getArticlesSearch,
    getArticlesSort,
    getArticlesType
} from '../../selectors/articlesPage'
import { articlesPageActions } from '../../slice/articlesPageSlice'
import { fetchArticles } from '../fetchArticles/fetchArticles'
import { type Order } from 'shared/types/sort'
import { type ArticleSortType, type ArticleType } from 'entities/Article/model/types/article'
import { addQueryParams } from 'shared/lib/url/addQueryParams/addQueryParams'

export const initArticlesPage = createAsyncThunk<void, URLSearchParams, ThunkApi<string> >(
    'articlesPage/initArticlesPage',
    (searchParams, thunkAPI) => {
        const { getState, dispatch } = thunkAPI

        const initiated = getArticlesPageInitiated(getState())
        const sort = getArticlesSort(getState())
        const order = getArticlesOrder(getState())
        const search = getArticlesSearch(getState())
        const type = getArticlesType(getState())

        if (!initiated) {
            const orderFromUrl = searchParams.get('order') as Order
            const sortFromUrl = searchParams.get('sort') as ArticleSortType
            const searchFromUrl = searchParams.get('search')
            const typeFromUrl = searchParams.get('type') as ArticleType

            if (orderFromUrl) {
                dispatch(articlesPageActions.setOrder(orderFromUrl))
            }

            if (sortFromUrl) {
                dispatch(articlesPageActions.setSort(sortFromUrl))
            }

            if (searchFromUrl) {
                dispatch(articlesPageActions.setSearch(searchFromUrl))
            }

            if (typeFromUrl) {
                dispatch(articlesPageActions.setType(typeFromUrl))
            }

            void dispatch(articlesPageActions.initView())
            void dispatch(fetchArticles({}))
        }

        addQueryParams({ sort, order, search, type })
    }
)
