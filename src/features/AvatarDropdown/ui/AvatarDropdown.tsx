import { type FC, useCallback } from 'react'
import { cls } from '@/shared/lib/classNames'
import { Dropdown, type DropdownItem } from '@/shared/ui/Popups'
import { Avatar } from '@/shared/ui/Avatar/Avatar'
import { getUserAuthData, isUserAdmin, isUserManager, type User, userActions } from '@/entities/User'
import { RoutePath } from '@/shared/config/routes/routes.config'
import { useDispatch, useSelector } from 'react-redux'
import { useTranslation } from 'react-i18next'

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
                    href: RoutePath.admin_panel
                }]
                : []),
            {
                content: t('Профиль'),
                href: RoutePath.profile + authData.id
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
            trigger={<Avatar src={authData.avatar} size={35} />}
            direction={'bottom_right'}
            items={generateDropdownItems(authData)}
            className={cls(className)}
        />
    )
}
