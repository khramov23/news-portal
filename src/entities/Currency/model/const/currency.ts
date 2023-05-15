import { type SelectOption } from '@/shared/ui/Select'

import { Currency } from '../types/currency'

type CurrencyArray = Array<SelectOption<Currency>>

export const currencies = Object.entries(Currency).reduce<CurrencyArray>(
    (options, currentPair) => [...options, {
        value: currentPair[1],
        content: currentPair[0]
    }], []
)
