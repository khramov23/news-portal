import { type PayloadAction } from '@reduxjs/toolkit'

import { articleReducer } from './articleSlice'
import { articleMock } from '../mocks/article'
import { fetchArticleData } from '../services/fetchArticleData/fetchArticleData.test'
import { type Article } from '../types/article'
import { type ArticleSchema } from '../types/articleSchema'

describe('articleSlice', () => {
    test('fetch success', () => {
        const state: DeepPartial<ArticleSchema> = {}
        const action: PayloadAction<Article> = { type: fetchArticleData.fulfilled.type, payload: articleMock }

        expect(articleReducer(
            state as ArticleSchema,
            action
        )).toEqual({
            isLoading: false,
            error: undefined,
            data: articleMock
        })
    })

    test('fetch loading', () => {
        const state: DeepPartial<ArticleSchema> = {
            isLoading: false
        }
        expect(articleReducer(
            state as ArticleSchema,
            fetchArticleData.pending
        )).toEqual({
            isLoading: true,
            error: undefined,
            data: undefined
        })
    })

    test('fetch error', () => {
        const state: DeepPartial<ArticleSchema> = {
            isLoading: true,
            error: undefined
        }
        const action: PayloadAction<string> = { type: fetchArticleData.rejected.type, payload: 'error' }

        expect(articleReducer(
            state as ArticleSchema,
            action
        )).toEqual({
            isLoading: false,
            error: 'error',
            data: undefined
        })
    })
})
