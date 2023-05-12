import { type StateSchema } from '@/app/providers/StoreProvider'

import { getProfileValidateErrors } from './getProfileValidateErrors'
import { ValidateError } from '../../types/profileSchema'

describe('getProfileValidateErrors', () => {
    test('works with value', () => {
        const state: DeepPartial<StateSchema> = {
            profile: {
                validateErrors: [
                    ValidateError.INCORRECT_CITY,
                    ValidateError.INCORRECT_FIRSTNAME
                ]
            }
        }
        expect(getProfileValidateErrors(state as StateSchema)).toEqual([
            ValidateError.INCORRECT_CITY,
            ValidateError.INCORRECT_FIRSTNAME
        ])
    })

    test('works with empty state', () => {
        const state: DeepPartial<StateSchema> = {}
        expect(getProfileValidateErrors(state as StateSchema)).toEqual(undefined)
    })
})
