import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk'
import { fetchArticleRecommendations } from './fetchArticleRecommendations'
import { type Article, articleMock } from 'entities/Article'

const articlesMock: Article[] = [
    { ...articleMock, id: '1' },
    { ...articleMock, id: '2' },
    { ...articleMock, id: '3' },
    { ...articleMock, id: '4' }
]

describe('fetchArticleRecommendations', () => {
    test('success fetch', async () => {
        const thunk = new TestAsyncThunk(fetchArticleRecommendations)

        thunk.api.get.mockReturnValue(Promise.resolve({ data: articlesMock }))
        const action = await thunk.callThunk()

        expect(thunk.api.get).toBeCalled()
        expect(action.meta.requestStatus).toBe('fulfilled')
        expect(action.payload).toEqual(articlesMock)
    })

    test('error fetch', async () => {
        const thunk = new TestAsyncThunk(fetchArticleRecommendations)

        thunk.api.get.mockReturnValue(Promise.resolve({ status: 403 }))
        const action = await thunk.callThunk()

        expect(thunk.api.get).toBeCalled()
        expect(action.meta.requestStatus).toBe('rejected')
    })
})
