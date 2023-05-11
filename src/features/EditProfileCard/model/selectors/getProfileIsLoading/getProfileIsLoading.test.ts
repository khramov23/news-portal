import { type StateSchema } from '@/app/providers/StoreProvider'
import { getProfileIsLoading } from './getProfileIsLoading'

describe('getProfileIsLoading', () => {
    test('works with value', () => {
        const state: DeepPartial<StateSchema> = {
            profile: {
                isLoading: true
            }
        }
        expect(getProfileIsLoading(state as StateSchema)).toEqual(true)
    })

    test('works with empty state', () => {
        const state: DeepPartial<StateSchema> = {}
        expect(getProfileIsLoading(state as StateSchema)).toEqual(false)
    })
})
