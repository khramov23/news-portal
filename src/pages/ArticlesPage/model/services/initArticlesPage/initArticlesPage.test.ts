import { TestAsyncThunk } from '@/shared/lib/tests/TestAsyncThunk'
import { initArticlesPage } from './initArticlesPage'
import { fetchArticles } from '../fetchArticles/fetchArticles'

jest.mock('../fetchArticles/fetchArticles')

describe('initArticlesPage', () => {
    test('not initiated', async () => {
        const thunk = new TestAsyncThunk(initArticlesPage, {
            articlesPage: {
                hasMore: true,
                _initiated: false
            }
        })
        await thunk.callThunk(new URLSearchParams())

        expect(thunk.dispatch).toBeCalledTimes(4)
        expect(fetchArticles).toBeCalledWith({})
    })

    test('initiated', async () => {
        const thunk = new TestAsyncThunk(initArticlesPage, {
            articlesPage: {
                hasMore: true,
                _initiated: true
            }
        })
        await thunk.callThunk(new URLSearchParams())

        expect(thunk.dispatch).toBeCalledTimes(2)
        expect(fetchArticles).not.toBeCalled()
    })
})
