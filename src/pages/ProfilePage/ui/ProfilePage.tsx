import { type FC, useEffect } from 'react'

import { cls } from 'shared/lib/classNames'
import { DynamicModuleLoader, type ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import { fetchProfileData, ProfileCard, profileReducer } from 'entities/Profile'
import { useAppDispatch } from 'shared/hooks/useAppDispatch'

interface ProfilePageProps {
    className?: string
}

const reducers: ReducersList = {
    profile: profileReducer
}

const ProfilePage: FC<ProfilePageProps> = ({ className }) => {
    const dispatch = useAppDispatch()

    useEffect(() => {
        if (__PROJECT__ !== 'storybook') { dispatch(fetchProfileData()) }
    }, [dispatch])

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
            <div className={cls(className)}>
                <ProfileCard />
            </div>
        </DynamicModuleLoader>

    )
}

export default ProfilePage
