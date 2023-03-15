import { type FC } from 'react'

import { cls } from 'shared/lib/classNames'
import { EditProfileCard } from 'features/EditProfileCard'

interface ProfilePageProps {
    className?: string
}

const ProfilePage: FC<ProfilePageProps> = ({ className }) => {
    return (
        <div className={cls(className)}>
            <EditProfileCard />
        </div>
    )
}

export default ProfilePage
