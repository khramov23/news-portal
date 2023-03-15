import { type FC, useCallback, useEffect } from 'react'

import styles from './EditProfileCard.module.scss'
import { cls } from 'shared/lib/classNames'
import { useSelector } from 'react-redux'
import { getProfileIsLoading } from '../model/selectors/getProfileIsLoading/getProfileIsLoading'
import { getProfileError } from '../model/selectors/getProfileError/getProfileError'
import { ProfileCard } from 'entities/Profile'
import { useAppDispatch } from 'shared/hooks/useAppDispatch'
import { fetchProfileData } from '../model/services/fetchProfileData'
import { DynamicModuleLoader, type ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import { profileActions, profileReducer } from '../model/slice/profileSlice'
import { EditProfileCardHeader } from './EditProfileCardHeader/EditProfileCardHeader'
import { getProfileReadonly } from 'features/EditProfileCard/model/selectors/getProfileReadonly/getProfileReadonly'
import { getProfileForm } from 'features/EditProfileCard/model/selectors/getProfileForm/getProfileForm'
import { type Currency } from 'entities/Currency'
import { type Country } from 'entities/Country'

const reducers: ReducersList = {
    profile: profileReducer
}

interface EditProfileCardProps {
    className?: string
}

export const EditProfileCard: FC<EditProfileCardProps> = ({ className }) => {
    const form = useSelector(getProfileForm)
    const isLoading = useSelector(getProfileIsLoading)
    const error = useSelector(getProfileError)
    const readonly = useSelector(getProfileReadonly)
    const dispatch = useAppDispatch()

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
