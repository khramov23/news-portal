import { type StateSchema } from '@/app/providers/StoreProvider'
import { getProfileForm } from './getProfileForm'
import { type Profile } from '../../types/profileSchema'
import { Currency } from '@/entities/Currency'
import { Country } from '@/entities/Country'

describe('getProfileForm', () => {
    test('works with value', () => {
        const form: Profile = {
            age: 21,
            currency: Currency.RUB,
            lastname: 'Khramov',
            firstname: 'Egor',
            username: 'admin',
            city: 'Nizhniy Novgorod',
            country: Country.Russia,
            avatar: 'some url'
        }

        const state: DeepPartial<StateSchema> = {
            profile: {
                form
            }
        }
        expect(getProfileForm(state as StateSchema)).toEqual(form)
    })

    test('works with empty state', () => {
        const state: DeepPartial<StateSchema> = {}
        expect(getProfileForm(state as StateSchema)).toEqual(undefined)
    })
})
