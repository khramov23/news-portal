import { type FC, memo, useCallback, useState } from 'react'

import styles from './Navbar.module.scss'
import { cls } from 'shared/lib/classNames'
import { Button, ButtonTheme } from 'shared/ui/Button/Button'
import { useTranslation } from 'react-i18next'
import { LoginModal } from 'features/AuthByUsername'
import { useDispatch, useSelector } from 'react-redux'
import { getUserAuthData, type User, userActions } from 'entities/User'
import { Dropdown, type DropdownItem } from 'shared/ui/Dropdown/Dropdown'
import { Avatar } from 'shared/ui/Avatar/Avatar'
import { RoutePath } from 'shared/config/routes/routes.config'

interface NavbarProps {
    className?: string
}

export const Navbar: FC<NavbarProps> = memo(({ className }) => {
    const { t } = useTranslation()
    const [isAuthModal, setIsAuthModal] = useState(false)
    const authData = useSelector(getUserAuthData)
    const dispatch = useDispatch()

    const onCloseModal = useCallback(() => {
        setIsAuthModal(false)
    }, [])

    const onShowModal = useCallback(() => {
        setIsAuthModal(true)
    }, [])

    const onLogout = useCallback(() => {
        dispatch(userActions.logout())
    }, [dispatch])

    const generateDropdownItems: (authData: User) => DropdownItem[] = (authData: User) =>
        [
            {
                content: t('Профиль'),
                href: RoutePath.profile + authData.id
            },
            {
                content: t('Выйти'),
                onClick: onLogout
            }
        ]

    if (authData) {
        return (
            <div className={cls(styles.navbar, className)}>
                <Dropdown
                    trigger={<Avatar src={authData.avatar} size={35} />}
                    direction={'bottom_right'}
                    items={generateDropdownItems(authData)}
                    className={styles.dropdown}
                />
            </div>
        )
    }

    return (
        <div className={cls(styles.navbar, className)}>
            <Button
                theme={ButtonTheme.CLEAR_INVERTED}
                className={styles.links}
                onClick={onShowModal}
            >
                {t('Войти')}
            </Button>
            <LoginModal isOpen={isAuthModal} onClose={onCloseModal} />
        </div>
    )
})
