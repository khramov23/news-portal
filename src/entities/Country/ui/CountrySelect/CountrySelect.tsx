import { type FC } from 'react'

import { useTranslation } from 'react-i18next'

import { ListBox } from '@/shared/ui/Popups'

import { countryOptions } from '../../model/const/country'
import { type Country } from '../../model/types/country'

interface CountrySelectProps {
    className?: string
    onChange?: (value: Country) => void
    value?: Country
    readonly?: boolean
}

export const CountrySelect: FC<CountrySelectProps> = (props) => {
    const { onChange, className, value, readonly } = props

    const { t } = useTranslation()

    const onCountryChange = (value: string) => {
        onChange?.(value as Country)
    }

    return (
        <ListBox
            className={className}
            onChange={onCountryChange}
            value={value}
            readonly={readonly}
            items={countryOptions}
            label={t('Выберите страну')}
        />
    )

    // return (
    //     <Select
    //         className={className}
    //         onChange={onCountryChange}
    //         value={value}
    //         readonly={readonly}
    //         options={countryOptions}
    //         label={t('Выберите страну')}
    //     />
    // )
}
