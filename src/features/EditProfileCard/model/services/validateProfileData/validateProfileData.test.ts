import { Country } from '@/entities/Country'
import { Currency } from '@/entities/Currency'

import { validateProfileData } from './validateProfileData'
import { type Profile, ValidateError } from '../../../model/types/profileSchema'

describe('validateProfileData', () => {
    test('all success', async () => {
        const data: Profile = {
            id: '1',
            age: 21,
            currency: Currency.RUB,
            lastname: 'Khramov',
            firstname: 'Egor',
            username: 'admin',
            city: 'Nizhniy Novgorod',
            country: Country.Russia,
            avatar: 'https://something.com'
        }
        expect(validateProfileData(data)).toEqual([])
    })

    test('firstname error', () => {
        const data: Profile = {
            id: '1',
            age: 21,
            currency: Currency.RUB,
            lastname: 'Khramov',
            firstname: 'l',
            username: 'admin',
            city: 'Nizhniy Novgorod',
            country: Country.Russia,
            avatar: 'https://something.com'
        }
        expect(validateProfileData(data)).toEqual([ValidateError.INCORRECT_FIRSTNAME])
    })

    test('lastname error', () => {
        const data: Profile = {
            id: '1',
            age: 21,
            currency: Currency.RUB,
            lastname: 's',
            firstname: 'Egor',
            username: 'admin',
            city: 'Nizhniy Novgorod',
            country: Country.Russia,
            avatar: 'https://something.com'
        }
        expect(validateProfileData(data)).toEqual([ValidateError.INCORRECT_LASTNAME])
    })

    test('age error', async () => {
        const data: Profile = {
            id: '1',
            age: 215,
            currency: Currency.RUB,
            lastname: 'Khramov',
            firstname: 'Egor',
            username: 'admin',
            city: 'Nizhniy Novgorod',
            country: Country.Russia,
            avatar: 'https://something.com'
        }
        expect(validateProfileData(data)).toEqual([ValidateError.INCORRECT_AGE])
    })

    test('currency error', async () => {
        const data: Profile = {
            id: '1',
            age: 21,
            currency: 'something' as Currency,
            lastname: 'Khramov',
            firstname: 'Egor',
            username: 'admin',
            city: 'Nizhniy Novgorod',
            country: Country.Russia,
            avatar: 'https://something.com'
        }
        expect(validateProfileData(data)).toEqual([ValidateError.INCORRECT_CURRENCY])
    })

    test('country error', async () => {
        const data: Profile = {
            id: '1',
            age: 21,
            currency: Currency.RUB,
            lastname: 'Khramov',
            firstname: 'Egor',
            username: 'admin',
            city: 'Nizhniy Novgorod',
            country: 'some country' as Country,
            avatar: 'https://something.com'
        }
        expect(validateProfileData(data)).toEqual([ValidateError.INCORRECT_COUNTRY])
    })

    test('city error', async () => {
        const data: Profile = {
            id: '1',
            age: 21,
            currency: Currency.RUB,
            lastname: 'Khramov',
            firstname: 'Egor',
            username: 'admin',
            city: '',
            country: Country.Russia,
            avatar: 'https://something.com'
        }
        expect(validateProfileData(data)).toEqual([ValidateError.INCORRECT_CITY])
    })

    test('avatar error', async () => {
        const data: Profile = {
            id: '1',
            age: 21,
            currency: Currency.RUB,
            lastname: 'Khramov',
            firstname: 'Egor',
            username: 'admin',
            city: 'Nizhniy Novgorod',
            country: Country.Russia,
            avatar: 'wrong url tochka ru'
        }
        expect(validateProfileData(data)).toEqual([ValidateError.INCORRECT_AVATAR])
    })

    test('username error', async () => {
        const data: Profile = {
            id: '1',
            age: 21,
            currency: Currency.RUB,
            lastname: 'Khramov',
            firstname: 'Egor',
            username: 'ad',
            city: 'Nizhniy Novgorod',
            country: Country.Russia,
            avatar: 'https://something.com'
        }
        expect(validateProfileData(data)).toEqual([ValidateError.INCORRECT_USERNAME])
    })

    test('many errors', async () => {
        const data: Profile = {
            id: '1',
            age: 2,
            currency: 'something' as Currency,
            lastname: 'K',
            firstname: 'E',
            username: 'ad',
            city: 'Nizhniy Novgorod',
            country: Country.Russia,
            avatar: 'https://something.com'
        }
        expect(validateProfileData(data)).toEqual([
            ValidateError.INCORRECT_FIRSTNAME,
            ValidateError.INCORRECT_LASTNAME,
            ValidateError.INCORRECT_AGE,
            ValidateError.INCORRECT_CURRENCY,
            ValidateError.INCORRECT_USERNAME
        ])
    })
})
