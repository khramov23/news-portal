import { type DeepPartial } from 'redux'
import { type StateSchema } from 'app/providers/StoreProvider'
import { getLoginPassword } from './getLoginPassword'

describe('getLoginPassword', () => {
    test('works with value', () => {
        const state: DeepPartial<StateSchema> = {
            loginForm: {
                password: '123123'
            }
        }
        expect(getLoginPassword(state as StateSchema)).toEqual('123123')
    })

    test('works with empty state', () => {
        const state: DeepPartial<StateSchema> = {}
        expect(getLoginPassword(state as StateSchema)).toEqual('')
    })
})