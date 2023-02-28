import { type DeepPartial } from 'redux'
import { type StateSchema } from 'app/providers/StoreProvider'
import { getLoginUsername } from './getLoginUsername'

describe('getLoginUsername', () => {
    test('works with value', () => {
        const state: DeepPartial<StateSchema> = {
            loginForm: {
                username: '123123'
            }
        }
        expect(getLoginUsername(state as StateSchema)).toEqual('123123')
    })

    test('works with empty state', () => {
        const state: DeepPartial<StateSchema> = {}
        expect(getLoginUsername(state as StateSchema)).toEqual('')
    })
})
