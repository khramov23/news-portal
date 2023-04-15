import { type FC } from 'react'

import { cls } from 'shared/lib/classNames'
import { EditProfileCard } from 'features/EditProfileCard'
import { useParams } from 'react-router'
import { useTranslation } from 'react-i18next'
import { Page } from 'widgets/Page'

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
        <Page className={cls(className)}>
            <EditProfileCard profileId={id} />
        </Page>
    )
}

export default ProfilePage
