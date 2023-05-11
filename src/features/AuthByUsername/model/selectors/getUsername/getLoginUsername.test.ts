import { getLoginUsername } from './getLoginUsername'
import { type StateSchema } from '@/app/providers/StoreProvider'

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
