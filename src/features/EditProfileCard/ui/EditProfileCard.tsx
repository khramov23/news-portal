import { type FC, useCallback, useEffect, useMemo } from 'react'

import styles from './EditProfileCard.module.scss'
import { cls } from 'shared/lib/classNames'
import { useSelector } from 'react-redux'
import { getProfileIsLoading } from '../model/selectors/getProfileIsLoading/getProfileIsLoading'
import { getProfileError } from '../model/selectors/getProfileError/getProfileError'
import { ProfileCard } from 'entities/Profile'
import { useAppDispatch } from 'shared/hooks/useAppDispatch'
import { fetchProfileData } from '../model/services/fetchProfileData/fetchProfileData'
import { DynamicModuleLoader, type ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import { profileActions, profileReducer } from '../model/slice/profileSlice'
import { EditProfileCardHeader } from './EditProfileCardHeader/EditProfileCardHeader'
import { getProfileReadonly } from 'features/EditProfileCard/model/selectors/getProfileReadonly/getProfileReadonly'
import { getProfileForm } from 'features/EditProfileCard/model/selectors/getProfileForm/getProfileForm'
import { type Currency } from 'entities/Currency'
import { type Country } from 'entities/Country'
import {
    getProfileValidateErrors
} from 'features/EditProfileCard/model/selectors/getProfileValidateErrors/getProfileValidateErrors'
import { Text, TextTheme } from 'shared/ui/Text/Text'
import { ValidateError } from 'features/EditProfileCard/model/types/profileSchema'
import { useTranslation } from 'react-i18next'

const reducers: ReducersList = {
    profile: profileReducer
}

interface EditProfileCardProps {
    className?: string
}

export const EditProfileCard: FC<EditProfileCardProps> = ({ className }) => {
    const { t } = useTranslation('profile')

    const form = useSelector(getProfileForm)
    const isLoading = useSelector(getProfileIsLoading)
    const error = useSelector(getProfileError)
    const readonly = useSelector(getProfileReadonly)
    const validateErrors = useSelector(getProfileValidateErrors)
    const dispatch = useAppDispatch()

    const validateErrorTranslates = useMemo<Record<ValidateError, string>>(() => ({
        [ValidateError.INCORRECT_AGE]: t('Некорректный возраст'),
        [ValidateError.INCORRECT_AVATAR]: t('Некорректный url для аватара'),
        [ValidateError.INCORRECT_CITY]: t('Некорректный город'),
        [ValidateError.INCORRECT_COUNTRY]: t('Некорректная страна'),
        [ValidateError.INCORRECT_CURRENCY]: t('Некорректная валюта'),
        [ValidateError.INCORRECT_FIRSTNAME]: t('Некорректное имя'),
        [ValidateError.INCORRECT_LASTNAME]: t('Некорректная фамилия'),
        [ValidateError.INCORRECT_USERNAME]: t('Некорректный псевдоним'),
        [ValidateError.NO_DATA]: t('Данные не указаны'),
        [ValidateError.SERVER_ERROR]: t('Ошибка на стороне сервера')
    }), [t])

    const onChangeFirstname = useCallback((value: string) => {
        dispatch(profileActions.updateProfile({ firstname: value || '' }))
    }, [dispatch])

    const onChangeLastname = useCallback((value: string) => {
        dispatch(profileActions.updateProfile({ lastname: value || '' }))
    }, [dispatch])

    const onChangeAge = useCallback((value: string) => {
        dispatch(profileActions.updateProfile({ age: Number(value || 0) }))
    }, [dispatch])

    const onChangeCity = useCallback((value: string) => {
        dispatch(profileActions.updateProfile({ city: value || '' }))
    }, [dispatch])

    const onChangeUsername = useCallback((value: string) => {
        dispatch(profileActions.updateProfile({ username: value || '' }))
    }, [dispatch])

    const onChangeAvatar = useCallback((value: string) => {
        dispatch(profileActions.updateProfile({ avatar: value || '' }))
    }, [dispatch])

    const onChangeCurrency = useCallback((value: Currency) => {
        dispatch(profileActions.updateProfile({ currency: value }))
    }, [dispatch])

    const onChangeCountry = useCallback((value: Country) => {
        dispatch(profileActions.updateProfile({ country: value }))
    }, [dispatch])

    useEffect(() => {
        if (__PROJECT__ !== 'storybook') { dispatch(fetchProfileData()) }
    }, [dispatch])

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
            <div className={cls(styles.editProfileCard, className)}>
                <EditProfileCardHeader />
                {validateErrors?.length && validateErrors.map(err =>
                    <Text key={validateErrorTranslates[err]} theme={TextTheme.ERROR} text={validateErrorTranslates[err]} />
                )}
                <ProfileCard
                    data={form}
                    isLoading={isLoading}
                    error={error}
                    className={styles.card}
                    readonly={readonly}
                    onChangeFirstname={onChangeFirstname}
                    onChangeLastname={onChangeLastname}
                    onChangeAge={onChangeAge}
                    onChangeCity={onChangeCity}
                    onChangeUsername={onChangeUsername}
                    onChangeAvatar={onChangeAvatar}
                    onChangeCurrency={onChangeCurrency}
                    onChangeCountry={onChangeCountry}
                />
            </div>
        </DynamicModuleLoader>

    )
}
