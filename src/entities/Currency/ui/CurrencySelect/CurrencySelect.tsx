import { type FC } from 'react'
import { Select } from 'shared/ui/Select/Select'
import { currencies } from '../../model/const/currency'
import { useTranslation } from 'react-i18next'
import { type Currency } from '../../model/types/currency'

interface CurrencySelectProps {
    className?: string
    onChange?: (value: Currency) => void
    value?: Currency
    readonly?: boolean
}

export const CurrencySelect: FC<CurrencySelectProps> = (props) => {
    const { t } = useTranslation()
    const { className, onChange, value, readonly } = props

    const onChangeSelect = (value: string) => {
        onChange?.(value as Currency)
    }

    return (
        <Select
            className={className}
            options={currencies}
            onChange={onChangeSelect}
            label={t('Выберите валюту')}
            value={value}
            readonly={readonly}
        />
    )
}
