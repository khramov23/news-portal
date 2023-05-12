import { createAsyncThunk } from '@reduxjs/toolkit'

import { type ThunkApi } from '@/app/providers/StoreProvider'

import { getArticlesIsLoading, getArticlesPageHasMore, getArticlesPageNum } from '../../selectors/articlesPage'
import { articlesPageActions } from '../../slice/articlesPageSlice'
import { fetchArticles } from '../fetchArticles/fetchArticles'

export const fetchNextArticlesPage = createAsyncThunk<void, void, ThunkApi<string> >(
    'articlesPage/fetchNextArticlesPage',
    async (_, thunkAPI) => {
        const { getState, dispatch } = thunkAPI

        const page = getArticlesPageNum(getState())
        const hasMore = getArticlesPageHasMore(getState())
        const isLoading = getArticlesIsLoading(getState())

        if (hasMore && !isLoading) {
            void dispatch(articlesPageActions.setPage(page + 1))
            void dispatch(fetchArticles({}))
        }
    }
)
