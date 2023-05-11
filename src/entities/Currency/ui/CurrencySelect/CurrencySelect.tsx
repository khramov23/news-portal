import { type FC } from 'react'
import { currencies } from '../../model/const/currency'
import { useTranslation } from 'react-i18next'
import { type Currency } from '../../model/types/currency'
import { ListBox } from '@/shared/ui/Popups'

interface CurrencySelectProps {
    className?: string
    onChange?: (value: Currency) => void
    value?: Currency
    readonly?: boolean
}

export const CurrencySelect: FC<CurrencySelectProps> = (props) => {
    const { t } = useTranslation()
    const { className, onChange, value, readonly } = props

    return (
        <ListBox
            className={className}
            items={currencies}
            onChange={onChange}
            value={value}
            readonly={readonly}
            label={t('Выберите валюту')}
        />
    )

    // return (
    //     <Select
    //         className={className}
    //         options={currencies}
    //         onChange={onChangeSelect}
    //         label={t('Выберите валюту')}
    //         value={value}
    //         readonly={readonly}
    //     />
    // )
}
