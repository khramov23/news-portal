import { profileActions, profileReducer } from '../../model/slice/profileSlice'
import { type Profile, type ProfileSchema } from '../types/profileSchema'
import { Currency } from '@/entities/Currency'
import { Country } from '@/entities/Country'
import { ValidateError } from '../types/profileSchema'
import { saveProfileData } from '../services/saveProfileData/saveProfileData'

const data: Profile = {
    age: 21,
    currency: Currency.RUB,
    lastname: 'Khramov',
    firstname: 'Egor',
    username: 'admin',
    city: 'Nizhniy Novgorod',
    country: Country.Russia,
    avatar: 'https://valid-url.com'
}

describe('profileSlice', () => {
    test('set readonly', () => {
        const state: DeepPartial<ProfileSchema> = {
            readonly: true
        }
        expect(profileReducer(
            state as ProfileSchema,
            profileActions.setReadonly(false)
        )).toEqual({ readonly: false })
    })

    test('cancel edit', () => {
        const state: DeepPartial<ProfileSchema> = {
            readonly: false,
            form: { username: '' },
            data,
            validateErrors: [ValidateError.INCORRECT_USERNAME]
        }
        expect(profileReducer(
            state as ProfileSchema,
            profileActions.cancelEdit()
        )).toEqual({
            readonly: true,
            form: { ...data },
            data,
            validateErrors: undefined
        })
    })

    test('update profile', () => {
        const state: DeepPartial<ProfileSchema> = {
            form: { ...data }
        }
        expect(profileReducer(
            state as ProfileSchema,
            profileActions.updateProfile({ ...data, age: 25 })
        )).toEqual({ form: { ...data, age: 25 } })
    })

    test('save profile pending', () => {
        const state: DeepPartial<ProfileSchema> = {
            isLoading: false,
            validateErrors: [ValidateError.INCORRECT_USERNAME]
        }
        expect(profileReducer(
            state as ProfileSchema,
            saveProfileData.pending
        )).toEqual({
            isLoading: true,
            validateErrors: undefined
        })
    })

    test('save profile fulfilled', () => {
        const state: DeepPartial<ProfileSchema> = {
            isLoading: true,
            validateErrors: undefined
        }
        expect(profileReducer(
            state as ProfileSchema,
            saveProfileData.fulfilled(data, '')
        )).toEqual({
            isLoading: false,
            form: data,
            data,
            readonly: true,
            validateErrors: undefined
        })
    })
})
