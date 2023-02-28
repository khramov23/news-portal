import { type LoginSchema } from 'features/AuthByUsername'
import { type DeepPartial } from 'redux'
import { loginActions, loginReducer } from 'features/AuthByUsername/model/slice/loginSlice'

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
