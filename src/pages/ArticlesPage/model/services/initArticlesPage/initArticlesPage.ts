import { createAsyncThunk } from '@reduxjs/toolkit'
import { type ThunkApi } from 'app/providers/StoreProvider'
import { getArticlesPageInitiated } from '../../selectors/articlesPage'
import { articlesPageActions } from '../../slice/articlesPageSlice'
import { fetchArticles } from '../fetchArticles/fetchArticles'

export const initArticlesPage = createAsyncThunk<void, void, ThunkApi<string> >(
    'articlesPage/initArticlesPage',
    async (_, thunkAPI) => {
        const { getState, dispatch } = thunkAPI

        const initiated = getArticlesPageInitiated(getState())

        if (!initiated) {
            void dispatch(articlesPageActions.initView())
            void dispatch(fetchArticles({}))
        }
    }
)
