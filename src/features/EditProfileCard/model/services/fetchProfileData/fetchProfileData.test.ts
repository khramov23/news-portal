import { fetchProfileData } from './fetchProfileData'
import { TestAsyncThunk } from '@/shared/lib/tests/TestAsyncThunk'
import { type Profile } from '../../types/profileSchema'
import { Currency } from '@/entities/Currency'
import { Country } from '@/entities/Country'

describe('fetchProfileData', () => {
    test('success fetch', async () => {
        const profile: Profile = {
            id: '1',
            age: 21,
            currency: Currency.RUB,
            lastname: 'Khramov',
            firstname: 'Egor',
            username: 'admin',
            city: 'Nizhniy Novgorod',
            country: Country.Russia,
            avatar: 'some url'
        }

        const thunk = new TestAsyncThunk(fetchProfileData)
        thunk.api.get.mockReturnValue(Promise.resolve({ data: profile }))
        const result = await thunk.callThunk('1')

        expect(thunk.api.get).toBeCalled()
        expect(result.meta.requestStatus).toBe('fulfilled')
        expect(result.payload).toEqual(profile)
    })

    test('fetch with error', async () => {
        const thunk = new TestAsyncThunk(fetchProfileData)
        thunk.api.get.mockReturnValue(Promise.resolve({ status: 403 }))
        const result = await thunk.callThunk('1')

        expect(thunk.api.get).toBeCalled()
        expect(result.meta.requestStatus).toBe('rejected')
    })
})
