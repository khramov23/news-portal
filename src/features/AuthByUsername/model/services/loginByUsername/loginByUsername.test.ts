import axios from 'axios'
import { loginByUsername } from './loginByUsername'
import { type User, userActions } from 'entities/User'
import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk'

jest.mock('axios')
const mockedAxios = jest.mocked(axios, true)

describe('loginByUsername', () => {
    test('success login', async () => {
        const userData: User = { username: 'khramov', id: '1' }
        mockedAxios.post.mockReturnValue(Promise.resolve({ data: userData }))

        const thunk = new TestAsyncThunk(loginByUsername)
        const result = await thunk.callThunk({ username: 'something', password: 'password' })

        console.log(result)
        expect(mockedAxios.post).toBeCalled()
        expect(result.meta.requestStatus).toBe('fulfilled')
        expect(thunk.dispatch).toBeCalledWith(userActions.setAuthData(userData))
        expect(thunk.dispatch).toBeCalledTimes(3)
        expect(result.payload).toEqual(userData)
    })

    test('error login', async () => {
        mockedAxios.post.mockReturnValue(Promise.resolve({ status: 403 }))

        const thunk = new TestAsyncThunk(loginByUsername)
        const result = await thunk.callThunk({ username: 'something', password: 'password' })

        expect(mockedAxios.post).toBeCalled()
        expect(result.meta.requestStatus).toBe('rejected')
        expect(thunk.dispatch).toBeCalledTimes(2)
    })
})
