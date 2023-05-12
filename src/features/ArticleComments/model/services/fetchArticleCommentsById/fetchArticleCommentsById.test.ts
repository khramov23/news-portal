import { commentMock, type Comment } from '@/entities/Comment'
import { TestAsyncThunk } from '@/shared/lib/tests/TestAsyncThunk'

import { fetchArticleCommentsById } from './fetchArticleCommentsById'

const commentsMock: Comment[] = [
    { ...commentMock, id: '1' },
    { ...commentMock, id: '2' }
]

describe('fetchArticleCommentsById', () => {
    test('success fetch', async () => {
        const thunk = new TestAsyncThunk(fetchArticleCommentsById)

        thunk.api.get.mockReturnValue(Promise.resolve({ data: commentsMock }))
        const action = await thunk.callThunk('1')

        expect(thunk.api.get).toBeCalled()
        expect(action.meta.requestStatus).toBe('fulfilled')
        expect(action.payload).toEqual(commentsMock)
    })

    test('error fetch', async () => {
        const thunk = new TestAsyncThunk(fetchArticleCommentsById)

        thunk.api.get.mockReturnValue(Promise.resolve({ status: 403 }))
        const action = await thunk.callThunk('1')

        expect(thunk.api.get).toBeCalled()
        expect(action.meta.requestStatus).toBe('rejected')
    })
})
