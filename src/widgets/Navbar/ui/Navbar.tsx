import { type FC, useCallback, useState } from 'react'

import styles from './Navbar.module.scss'
import { cls } from 'shared/lib/classNames'
import { Button, ButtonTheme } from 'shared/ui/Button/Button'
import { useTranslation } from 'react-i18next'
import { LoginModal } from 'features/AuthByUsername'
import { useDispatch, useSelector } from 'react-redux'
import { getUserAuthData, userActions } from 'entities/User'

interface NavbarProps {
    className?: string
}

export const Navbar: FC<NavbarProps> = ({ className }) => {
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
        onCloseModal()
    }, [dispatch, onCloseModal])

    if (authData) {
        return (
            <div className={cls(styles.navbar, className)}>
                <Button
                    theme={ButtonTheme.CLEAR_INVERTED}
                    className={styles.links}
                    onClick={onLogout}
                >
                    {t('Выйти')}
                </Button>
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
}
