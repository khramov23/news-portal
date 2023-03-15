import { type FC, useCallback } from 'react'

import styles from './EditProfileCardHeader.module.scss'
import { cls } from 'shared/lib/classNames'
import { Text } from 'shared/ui/Text/Text'
import { Button, ButtonTheme } from 'shared/ui/Button/Button'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
import { getProfileReadonly } from '../../model/selectors/getProfileReadonly/getProfileReadonly'
import { useAppDispatch } from 'shared/hooks/useAppDispatch'
import { profileActions } from 'features/EditProfileCard'
import { saveProfileData } from 'features/EditProfileCard/model/services/saveProfileData'

interface EditProfileCardHeaderProps {
    className?: string
}

export const EditProfileCardHeader: FC<EditProfileCardHeaderProps> = ({ className }) => {
    const { t } = useTranslation('profile')
    const readonly = useSelector(getProfileReadonly)
    const dispatch = useAppDispatch()

    const onEdit = useCallback(() => {
        dispatch(profileActions.setReadonly(false))
    }, [dispatch])

    const onCancelEdit = useCallback(() => {
        dispatch(profileActions.cancelEdit())
    }, [dispatch])

    const onProfileSave = useCallback(() => {
        dispatch(saveProfileData())
    }, [dispatch])

    return (
        <div className={cls(styles.editProfileCardHeader, className)}>
            <Text title={t('Профиль')} />
            {}
            {readonly
                ? (
                    <Button onClick={onEdit}>
                        {t('Редактировать')}
                    </Button>
                )
                : (
                    <div>
                        <Button onClick={onCancelEdit} theme={ButtonTheme.OUTLINE_ERROR}>
                            {t('Отменить ')}
                        </Button>
                        <Button onClick={onProfileSave} className={styles.saveButton}>
                            {t('Сохранить ')}
                        </Button>
                    </div>
                )}

        </div>
    )
}