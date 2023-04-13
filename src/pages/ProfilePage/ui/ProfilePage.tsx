import { type FC } from 'react'

import { cls } from 'shared/lib/classNames'
import { EditProfileCard } from 'features/EditProfileCard'
import { useParams } from 'react-router'
import { useTranslation } from 'react-i18next'

interface ProfilePageProps {
    className?: string
}

const ProfilePage: FC<ProfilePageProps> = ({ className }) => {
    const { t } = useTranslation('profile')
    const { id } = useParams<{ id: string }>()

    if (!id) {
        return t('Профиль не найден')
    }

    return (
        <div className={cls(className)}>
            <EditProfileCard profileId={id} />
        </div>
    )
}

export default ProfilePage
