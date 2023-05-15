import { Country } from '@/entities/Country'
import { Currency } from '@/entities/Currency'
import { Profile } from '@/entities/Profile'
import { TestAsyncThunk } from '@/shared/lib/tests/TestAsyncThunk'

import { saveProfileData } from './saveProfileData'
import { ValidateError } from '../../types/profileSchema'

const form: Profile = {
    id: '1',
    age: 21,
    currency: Currency.RUB,
    lastname: 'Khramov',
    firstname: 'Egor',
    username: 'admin',
    city: 'Nizhniy Novgorod',
    country: Country.Russia,
    avatar: 'https://valid-url.com'
}

describe('saveProfileData', () => {
    test('success save', async () => {
        const thunk = new TestAsyncThunk(saveProfileData, {
            profile: {
                form
            }
        })
        thunk.api.put.mockReturnValue(Promise.resolve({ data: form }))
        const result = await thunk.callThunk()

        expect(thunk.api.put).toBeCalled()
        expect(result.meta.requestStatus).toBe('fulfilled')
        expect(result.payload).toEqual(form)
    })

    test('server error', async () => {
        const thunk = new TestAsyncThunk(saveProfileData, {
            profile: {
                form
            }
        })
        thunk.api.put.mockReturnValue(Promise.resolve({ status: 403 }))
        const result = await thunk.callThunk()

        expect(thunk.api.put).toBeCalled()
        expect(result.meta.requestStatus).toBe('rejected')
        expect(result.payload).toEqual([ValidateError.SERVER_ERROR])
    })

    test('validation error', async () => {
        const thunk = new TestAsyncThunk(saveProfileData, {
            profile: {
                form: { ...form, avatar: 'invalid url' }
            }
        })
        thunk.api.put.mockReturnValue(Promise.resolve({ status: 403 }))
        const result = await thunk.callThunk()

        expect(thunk.api.put).not.toBeCalled()
        expect(result.meta.requestStatus).toBe('rejected')
        expect(result.payload).toEqual([ValidateError.INCORRECT_AVATAR])
    })
})
