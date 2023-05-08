import { type FC, memo, useCallback, useState } from 'react'

import styles from './Navbar.module.scss'
import { cls } from 'shared/lib/classNames'
import { Button, ButtonTheme } from 'shared/ui/Button/Button'
import { useTranslation } from 'react-i18next'
import { LoginModal } from 'features/AuthByUsername'
import { useSelector } from 'react-redux'
import { getUserAuthData } from 'entities/User'
import { Text, TextTheme } from 'shared/ui/Text/Text'
import { AvatarDropdown } from 'features/AvatarDropdown'
import { HStack } from 'shared/ui/Stack'
import { NotificationButton } from 'features/NotificationButton'

interface NavbarProps {
    className?: string
}

export const Navbar: FC<NavbarProps> = memo(({ className }) => {
    const { t } = useTranslation()

    const [isAuthModal, setIsAuthModal] = useState(false)
    const authData = useSelector(getUserAuthData)

    const onCloseModal = useCallback(() => {
        setIsAuthModal(false)
    }, [])

    const onShowModal = useCallback(() => {
        setIsAuthModal(true)
    }, [])

    if (authData) {
        return (
            <header className={cls(styles.navbar, className)}>
                <Text
                    title={t('News portal')}
                    theme={TextTheme.INVERTED}
                />
                <HStack
                    gap={24}
                    className={styles.actions}
                    align={'center'}
                >
                    <NotificationButton />
                    <AvatarDropdown />
                </HStack>
            </header>
        )
    }

    return (
        <header className={cls(styles.navbar, className)}>
            <Button
                theme={ButtonTheme.CLEAR_INVERTED}
                className={styles.links}
                onClick={onShowModal}
            >
                {t('Войти')}
            </Button>
            <LoginModal isOpen={isAuthModal} onClose={onCloseModal} />
        </header>
    )
})
