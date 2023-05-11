import { type StateSchema } from '@/app/providers/StoreProvider'
import { getProfileReadonly } from './getProfileReadonly'

describe('getProfileReadonly', () => {
    test('works with value', () => {
        const state: DeepPartial<StateSchema> = {
            profile: {
                readonly: false
            }
        }
        expect(getProfileReadonly(state as StateSchema)).toEqual(false)
    })

    test('works with empty state', () => {
        const state: DeepPartial<StateSchema> = {}
        expect(getProfileReadonly(state as StateSchema)).toEqual(undefined)
    })
})
