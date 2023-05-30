import { type FC } from 'react'

import { useTranslation } from 'react-i18next'

import { type Country, CountrySelect } from '@/entities/Country'
import { type Currency, CurrencySelect } from '@/entities/Currency'
import { cls } from '@/shared/lib/classNames'
import { Avatar } from '@/shared/ui/Avatar'
import { Input } from '@/shared/ui/Input'
import { Loader } from '@/shared/ui/Loader'
import { Text, TextTheme } from '@/shared/ui/Text'

import styles from './ProfileCard.module.scss'
import { Profile } from '../../model/types/profile'

interface ProfileCardProps {
    className?: string
    data?: Profile
    isLoading?: boolean
    error?: string
    readonly?: boolean
    onChangeFirstname?: (value: string) => void
    onChangeLastname?: (value: string) => void
    onChangeAge?: (value: string) => void
    onChangeCity?: (value: string) => void
    onChangeUsername?: (value: string) => void
    onChangeAvatar?: (value: string) => void
    onChangeCurrency?: (value: Currency) => void
    onChangeCountry?: (value: Country) => void
}

export const ProfileCard: FC<ProfileCardProps> = (props) => {
    const {
        className,
        error,
        isLoading,
        readonly = true,
        data,
        onChangeFirstname,
        onChangeLastname,
        onChangeAge,
        onChangeCity,
        onChangeAvatar,
        onChangeUsername,
        onChangeCurrency,
        onChangeCountry
    } = props

    const { t } = useTranslation('profile')

    if (isLoading) {
        return (
            <div className={cls(styles.profileCard, className, styles.loading)}>
                <Loader />
            </div>
        )
    }

    if (error) {
        return (
            <div className={cls(styles.profileCard, className, styles.error)}>
                <Text
                    text={t('Попробуйте перезагрузить страницу')}
                    title={t('Произошла ошибка при загрузке данных')}
                    theme={TextTheme.ERROR}
                    align='center'
                />
            </div>
        )
    }

    return (
        <div className={cls(styles.profileCard, className, { [styles.editing]: !readonly })}>
            <div className={styles.data}>
                {data?.avatar && (
                    <div className={styles.avatarWrapper}>
                        <Avatar src={data.avatar} size={200} />
                    </div>
                ) }
                <Input
                    value={data?.firstname}
                    onChange={onChangeFirstname}
                    placeholder={t('Ваше имя')}
                    className={styles.input}
                    readonly={readonly}
                    data-testid={'ProfileCard.firstname'}
                />
                <Input
                    value={data?.lastname}
                    onChange={onChangeLastname}
                    placeholder={t('Ваша фамилия')}
                    className={styles.input}
                    readonly={readonly}
                    data-testid={'ProfileCard.lastname'}
                />
                <Input
                    value={data?.age}
                    onChange={onChangeAge}
                    placeholder={t('Ваш возраст')}
                    className={styles.input}
                    readonly={readonly}
                    type={'number'}
                    data-testid={'ProfileCard.age'}
                />
                <Input
                    value={data?.city}
                    onChange={onChangeCity}
                    placeholder={t('Ваш город')}
                    className={styles.input}
                    readonly={readonly}
                    data-testid={'ProfileCard.city'}
                />
                <Input
                    value={data?.username}
                    onChange={onChangeUsername}
                    placeholder={t('Ваш псевдоним')}
                    className={styles.input}
                    readonly={readonly}
                    data-testid={'ProfileCard.username'}
                />
                <Input
                    value={data?.avatar}
                    onChange={onChangeAvatar}
                    placeholder={t('Ваш аватар')}
                    className={styles.input}
                    readonly={readonly}
                    data-testid={'ProfileCard.avatar'}
                />
                <CurrencySelect
                    onChange={onChangeCurrency}
                    value={data?.currency}
                    className={styles.select}
                    readonly={readonly}
                />
                <CountrySelect
                    onChange={onChangeCountry}
                    value={data?.country}
                    className={styles.select}
                    readonly={readonly}
                />
            </div>
        </div>
    )
}
