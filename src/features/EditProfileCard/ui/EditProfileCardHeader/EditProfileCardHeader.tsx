import { type FC, useCallback } from 'react'

import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'

import { getUserAuthData } from '@/entities/User'
import { useAppDispatch } from '@/shared/hooks/useAppDispatch'
import { cls } from '@/shared/lib/classNames'
import { Button, ButtonTheme } from '@/shared/ui/Button'
import { Text } from '@/shared/ui/Text'

import styles from './EditProfileCardHeader.module.scss'
import { getProfileData } from '../../model/selectors/getProfileData/getProfileData'
import { getProfileReadonly } from '../../model/selectors/getProfileReadonly/getProfileReadonly'
import { saveProfileData } from '../../model/services/saveProfileData/saveProfileData'
import { profileActions } from '../../model/slice/profileSlice'

interface EditProfileCardHeaderProps {
    className?: string
}

export const EditProfileCardHeader: FC<EditProfileCardHeaderProps> = ({ className }) => {
    const { t } = useTranslation('profile')
    const readonly = useSelector(getProfileReadonly)
    const dispatch = useAppDispatch()

    const profileData = useSelector(getProfileData)
    const userData = useSelector(getUserAuthData)
    const isMyProfile = profileData?.id === userData?.id

    const onEdit = useCallback(() => {
        dispatch(profileActions.setReadonly(false))
    }, [dispatch])

    const onCancelEdit = useCallback(() => {
        dispatch(profileActions.cancelEdit())
    }, [dispatch])

    const onProfileSave = useCallback(() => {
        if (__PROJECT__ !== 'storybook') { dispatch(saveProfileData()) }
    }, [dispatch])

    return (
        <div className={cls(styles.editProfileCardHeader, className)}>
            <Text title={t('Профиль')} />

            {isMyProfile && (readonly
                ? (
                    <Button onClick={onEdit} data-testid={'EditProfileCardHeader.EditButton'}>
                        {t('Редактировать')}
                    </Button>
                )
                : (
                    <div>
                        <Button onClick={onCancelEdit} theme={ButtonTheme.OUTLINE_ERROR} data-testid={'EditProfileCardHeader.CancelButton'}>
                            {t('Отменить ')}
                        </Button>
                        <Button onClick={onProfileSave} className={styles.saveButton} data-testid={'EditProfileCardHeader.SaveButton'}>
                            {t('Сохранить ')}
                        </Button>
                    </div>
                ))}

        </div>
    )
}
