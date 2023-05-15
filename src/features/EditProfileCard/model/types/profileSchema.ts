import { Profile } from '@/entities/Profile'

export enum ValidateError {
    INCORRECT_FIRSTNAME = 'INCORRECT_FIRSTNAME',
    INCORRECT_LASTNAME = 'INCORRECT_LASTNAME',
    INCORRECT_AGE = 'INCORRECT_AGE',
    INCORRECT_CURRENCY = 'INCORRECT_CURRENCY',
    INCORRECT_COUNTRY = 'INCORRECT_COUNTRY',
    INCORRECT_USERNAME = 'INCORRECT_USERNAME',
    INCORRECT_CITY = 'INCORRECT_CITY',
    INCORRECT_AVATAR = 'INCORRECT_AVATAR',
    NO_DATA = 'NO_DATA',
    SERVER_ERROR = 'SERVER_ERROR',
}

export interface ProfileSchema {
    data?: Profile
    form?: Profile
    isLoading: boolean
    error: string | undefined
    readonly: boolean
    validateErrors?: ValidateError[]
}
