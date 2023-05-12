import { type FC } from 'react'

import { useTranslation } from 'react-i18next'
import { useParams } from 'react-router'

import { EditProfileCard } from '@/features/EditProfileCard'
import { cls } from '@/shared/lib/classNames'
import { Page } from '@/widgets/Page'

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
