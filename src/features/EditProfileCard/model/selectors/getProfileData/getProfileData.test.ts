import { type StateSchema } from 'app/providers/StoreProvider'
import { getProfileData } from './getProfileData'
import { type Profile } from 'features/EditProfileCard'
import { Currency } from 'entities/Currency'
import { Country } from 'entities/Country'

describe('getProfileData', () => {
    test('works with value', () => {
        const data: Profile = {
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
                data
            }
        }
        expect(getProfileData(state as StateSchema)).toEqual(data)
    })

    test('works with empty state', () => {
        const state: DeepPartial<StateSchema> = {}
        expect(getProfileData(state as StateSchema)).toEqual(undefined)
    })
})
