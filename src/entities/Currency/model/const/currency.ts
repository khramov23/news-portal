import { Currency } from '../types/currency'
import { type SelectOption } from 'shared/ui/Select/Select'

type CurrencyArray = Array<SelectOption<Currency>>

export const currencies = Object.entries(Currency).reduce<CurrencyArray>(
    (options, currentPair) => [...options, {
        value: currentPair[1],
        content: currentPair[0]
    }], []
)
