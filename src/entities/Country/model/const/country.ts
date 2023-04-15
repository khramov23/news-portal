import { Country } from '../types/country'
import { type SelectOption } from 'shared/ui/Select/Select'

type CountryArray = Array<SelectOption<Country>>

export const countryOptions = Object.entries(Country).reduce<CountryArray>(
    (options, currentPair) => [...options, {
        value: currentPair[1],
        content: currentPair[0]
    }], []
)
