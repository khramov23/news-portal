import { type FC, useCallback } from 'react'

import { useTranslation } from 'react-i18next'
import { useDispatch, useSelector } from 'react-redux'

import { getUserAuthData, isUserAdmin, isUserManager, type User, userActions } from '@/entities/User'
import { getRouteAdmin, getRouteProfile } from '@/shared/config/routes/routes.config'
import { cls } from '@/shared/lib/classNames'
import { Avatar } from '@/shared/ui/Avatar'
import { Dropdown, type DropdownItem } from '@/shared/ui/Popups'

interface AvatarDropdownProps {
    className?: string
}

export const AvatarDropdown: FC<AvatarDropdownProps> = ({ className }) => {
    const { t } = useTranslation()
    const dispatch = useDispatch()

    const authData = useSelector(getUserAuthData)
    const isAdmin = useSelector(isUserAdmin)
    const isManager = useSelector(isUserManager)

    const isAdminPanelAvailable = isAdmin || isManager

    const onLogout = useCallback(() => {
        dispatch(userActions.logout())
    }, [dispatch])

    const generateDropdownItems: (authData: User) => DropdownItem[] = (authData: User) =>
        [
            ...(isAdminPanelAvailable
                ? [{
                    content: t('Админка'),
                    href: getRouteAdmin()
                }]
                : []),
            {
                content: t('Профиль'),
                href: getRouteProfile(authData.id)
            },
            {
                content: t('Выйти'),
                onClick: onLogout
            }
        ]

    if (!authData) {
        return null
    }

    return (
        <Dropdown
            trigger={<Avatar src={authData.avatar} size={35} fallbackInverted />}
            direction={'bottom_right'}
            items={generateDropdownItems(authData)}
            className={cls(className)}
        />
    )
}
