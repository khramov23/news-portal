import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk'
import { fetchNextArticlesPage } from './fetchNextArticlesPage'
import { ArticleView } from 'entities/Article'
import { fetchArticles } from '../fetchArticles/fetchArticles'

jest.mock('../fetchArticles/fetchArticles')

describe('fetchNextArticlesPage', () => {
    test('success', async () => {
        const thunk = new TestAsyncThunk(fetchNextArticlesPage, {
            articlesPage: {
                page: 2,
                ids: [],
                entities: {},
                view: ArticleView.BIG,
                hasMore: true,
                isLoading: false,
                limit: 5
            }
        })
        await thunk.callThunk()

        expect(thunk.dispatch).toBeCalledTimes(4)
        expect(fetchArticles).toBeCalledWith({ page: 3 })
    })

    test('end of scrolling', async () => {
        const thunk = new TestAsyncThunk(fetchNextArticlesPage, {
            articlesPage: {
                page: 2,
                ids: [],
                entities: {},
                view: ArticleView.BIG,
                hasMore: false,
                isLoading: false,
                limit: 5
            }
        })
        await thunk.callThunk()

        expect(thunk.dispatch).toBeCalledTimes(2)
        expect(fetchArticles).not.toBeCalled()
    })

    test('while loading', async () => {
        const thunk = new TestAsyncThunk(fetchNextArticlesPage, {
            articlesPage: {
                page: 2,
                ids: [],
                entities: {},
                view: ArticleView.BIG,
                hasMore: true,
                isLoading: true,
                limit: 5
            }
        })
        await thunk.callThunk()

        expect(thunk.dispatch).toBeCalledTimes(2)
        expect(fetchArticles).not.toBeCalled()
    })
})
