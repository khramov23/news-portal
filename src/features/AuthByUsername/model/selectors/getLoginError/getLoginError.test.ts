import { type StateSchema } from 'app/providers/StoreProvider'
import { getLoginError } from './getLoginError'

describe('getLoginError', () => {
    test('works with value', () => {
        const state: DeepPartial<StateSchema> = {
            loginForm: {
                error: 'something'
            }
        }
        expect(getLoginError(state as StateSchema)).toEqual('something')
    })

    test('works with empty state', () => {
        const state: DeepPartial<StateSchema> = {}
        expect(getLoginError(state as StateSchema)).toEqual(undefined)
    })
})
