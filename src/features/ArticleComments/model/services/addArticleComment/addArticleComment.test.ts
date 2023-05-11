import { TestAsyncThunk } from '@/shared/lib/tests/TestAsyncThunk'
import { addArticleComment } from './addArticleComment'
import { commentMock } from '@/entities/Comment'
import { type StateSchema } from '@/app/providers/StoreProvider'

const stateMock: DeepPartial<StateSchema> = {
    article: {
        data: {
            id: '1'
        }
    },
    articleCommentsForm: {
        text: 'some comment'
    },
    user: {
        authData: {
            id: '1'
        }
    }
}

describe('addArticleComment', () => {
    test('success add', async () => {
        const thunk = new TestAsyncThunk(addArticleComment, stateMock)
        thunk.api.post.mockReturnValue(Promise.resolve({ data: commentMock }))

        const action = await thunk.callThunk()

        expect(action.meta.requestStatus).toEqual('fulfilled')
        expect(action.payload).toEqual(commentMock)
        expect(thunk.dispatch).toBeCalledTimes(3)
    })
})
