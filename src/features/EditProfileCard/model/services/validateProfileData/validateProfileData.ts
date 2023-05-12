import { Country } from '@/entities/Country'
import { Currency } from '@/entities/Currency'

import { urlRegexp } from '../../../const/regexp'
import { type Profile, ValidateError } from '../../../model/types/profileSchema'

export const validateProfileData = (profile?: Profile) => {
    if (!profile) { return [ValidateError.NO_DATA] }

    const { firstname, age, avatar, country, city, currency, username, lastname } = profile

    const errors: ValidateError[] = []

    if (!firstname || firstname.length < 2 || firstname.length > 30) {
        errors.push(ValidateError.INCORRECT_FIRSTNAME)
    }

    if (!lastname || lastname.length < 2 || lastname.length > 40) {
        errors.push(ValidateError.INCORRECT_LASTNAME)
    }

    if (!age || Number.isNaN(age) || age < 14 || age > 150) {
        errors.push(ValidateError.INCORRECT_AGE)
    }

    if (!avatar?.match(urlRegexp)) {
        errors.push(ValidateError.INCORRECT_AVATAR)
    }

    if (!currency || !Object.values(Currency).includes(currency)) {
        errors.push(ValidateError.INCORRECT_CURRENCY)
    }

    if (!country || !Object.values(Country).includes(country)) {
        errors.push(ValidateError.INCORRECT_COUNTRY)
    }

    if (!city) {
        errors.push(ValidateError.INCORRECT_CITY)
    }

    if (!username || username.length < 3 || username.length > 22) {
        errors.push(ValidateError.INCORRECT_USERNAME)
    }

    return errors
}
