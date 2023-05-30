import { type User, userActions } from '@/entities/User'
import { TestAsyncThunk } from '@/shared/lib/tests/TestAsyncThunk'

import { loginByUsername } from './loginByUsername'

describe('loginByUsername', () => {
    test('success common', async () => {
        const userData: User = { username: 'khramov', id: '1' }

        const thunk = new TestAsyncThunk(loginByUsername)
        thunk.api.post.mockReturnValue(Promise.resolve({ data: userData }))
        const result = await thunk.callThunk({ username: 'something', password: 'password' })

        expect(thunk.api.post).toBeCalled()
        expect(result.meta.requestStatus).toBe('fulfilled')
        expect(thunk.dispatch).toBeCalledWith(userActions.setAuthData(userData))
        expect(thunk.dispatch).toBeCalledTimes(3)
        expect(result.payload).toEqual(userData)
    })

    test('error common', async () => {
        const thunk = new TestAsyncThunk(loginByUsername)
        thunk.api.post.mockReturnValue(Promise.resolve({ status: 403 }))
        const result = await thunk.callThunk({ username: 'something', password: 'password' })

        expect(thunk.api.post).toBeCalled()
        expect(result.meta.requestStatus).toBe('rejected')
        expect(thunk.dispatch).toBeCalledTimes(2)
    })
})
