import { type LoginSchema } from '../types/loginSchema'
import { loginActions, loginReducer } from '../slice/loginSlice'

describe('loginSlice', () => {
    test('setUsername', () => {
        const state: DeepPartial<LoginSchema> = {
            username: ''
        }
        expect(loginReducer(
            state as LoginSchema,
            loginActions.setUsername('something')
        )).toEqual({
            username: 'something'
        })
    })

    test('setPassword', () => {
        const state: DeepPartial<LoginSchema> = {
            password: ''
        }
        expect(loginReducer(
            state as LoginSchema,
            loginActions.setPassword('something')
        )).toEqual({
            password: 'something'
        })
    })
})
