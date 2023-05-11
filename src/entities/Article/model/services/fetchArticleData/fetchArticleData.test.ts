import { TestAsyncThunk } from '@/shared/lib/tests/TestAsyncThunk'
import { fetchArticleData } from './fetchArticleData'
import { articleMock } from '../../mocks/article'

export { fetchArticleData } from './fetchArticleData'

describe('fetchArticleData', () => {
    test('success fetch', async () => {
        const thunk = new TestAsyncThunk(fetchArticleData)
        thunk.api.get.mockReturnValue(Promise.resolve({ data: articleMock }))

        const action = await thunk.callThunk('1')

        expect(thunk.api.get).toBeCalled()
        expect(action.meta.requestStatus).toEqual('fulfilled')
        expect(action.payload).toEqual(articleMock)
    })

    test('fetch with error', async () => {
        const thunk = new TestAsyncThunk(fetchArticleData)
        thunk.api.get.mockReturnValue(Promise.resolve({ status: 403 }))

        const action = await thunk.callThunk('1')

        expect(thunk.api.get).toBeCalled()
        expect(action.meta.requestStatus).toEqual('rejected')
    })
})
