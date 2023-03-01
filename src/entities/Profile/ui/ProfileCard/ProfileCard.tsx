import { type FC } from 'react'

import styles from './ProfileCard.module.scss'
import { cls } from 'shared/lib/classNames'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
import { getProfileData } from 'entities/Profile/model/selectors/getProfileData/getProfileData'
import { Text } from 'shared/ui/Text/Text'
import { Button, ButtonTheme } from 'shared/ui/Button/Button'
import { Input } from 'shared/ui/Input/Input'

interface ProfileCardProps {
    className?: string
}

export const ProfileCard: FC<ProfileCardProps> = ({ className }) => {
    const { t } = useTranslation('profile')

    const data = useSelector(getProfileData)

    return (
        <div className={cls(styles.profileCard, className)}>
            <div className={styles.header}>
                <Text title={t('Профиль')} />
                <Button theme={ButtonTheme.OUTLINE}>
                    {t('Редактировать')}
                </Button>
            </div>
            <div className={styles.data}>
                <Input
                    value={data?.first}
                    placeholder={t('Ваше имя')}
                    className={styles.input}
                />
                <Input
                    value={data?.lastname}
                    placeholder={t('Ваша фамилия')}
                    className={styles.input}
                />
            </div>
        </div>
    )
}
