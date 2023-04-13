import { getUserAuthData } from 'entities/User'
import { createAsyncThunk } from '@reduxjs/toolkit'
import { type ThunkApi } from 'app/providers/StoreProvider'
import { getArticleCommentsFormText } from '../../selectors/articleCommentsForm'
import { getArticleData } from 'entities/Article/model/selectors/articleDetails'
import { type Comment } from 'entities/Comment'
import {
    fetchArticleCommentsById
} from 'features/ArticleComments/model/services/fetchArticleCommentsById/fetchArticleCommentsById'

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
