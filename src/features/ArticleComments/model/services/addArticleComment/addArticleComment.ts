import { createAsyncThunk } from '@reduxjs/toolkit'

import { type ThunkApi } from '@/app/providers/StoreProvider'
import { getArticleData } from '@/entities/Article'
import { type Comment } from '@/entities/Comment'
import { getUserAuthData } from '@/entities/User'

import { getArticleCommentsFormText } from '../../selectors/articleCommentsForm'
import {
    fetchArticleCommentsById
} from '../fetchArticleCommentsById/fetchArticleCommentsById'

export const addArticleComment = createAsyncThunk<Comment, void, ThunkApi<string>>(
    'articleCommentsForm/addArticleComment',
    async (_, thunkAPI) => {
        const { rejectWithValue, dispatch, extra, getState } = thunkAPI
        try {
            const userData = getUserAuthData(getState())
            const text = getArticleCommentsFormText(getState())
            const article = getArticleData(getState())

            if (!userData || !text || !article) {
                return rejectWithValue('error')
            }

            const response = await extra.api.post<Comment>('/comments', {
                text,
                userId: userData.id,
                articleId: article.id
            })
            console.log(response.data)

            if (!response.data) {
                throw new Error()
            }

            void dispatch(fetchArticleCommentsById(article.id))

            return response.data
        } catch (e) {
            return rejectWithValue('error')
        }
    }
)
