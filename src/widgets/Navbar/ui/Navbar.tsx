import { type FC, useCallback, useState } from 'react'

import styles from './Navbar.module.scss'
import { cls } from 'shared/lib/classNames'
import { Button, ButtonTheme } from 'shared/ui/Button/Button'
import { useTranslation } from 'react-i18next'
import { Modal } from 'shared/ui/Modal/Modal'

interface NavbarProps {
    className?: string
}

export const Navbar: FC<NavbarProps> = ({ className }) => {
    const { t } = useTranslation()
    const [isAuthModal, setIsAuthModal] = useState(false)

    const onToggleModal = useCallback(() => {
        setIsAuthModal(prev => !prev)
    }, [])

    return (
        <div className={cls(styles.navbar, className)}>
            <Button
                theme={ButtonTheme.CLEAR_INVERTED}
                className={styles.links}
                onClick={onToggleModal}
            >
                {t('Войти')}
            </Button>
            <Modal isOpen={isAuthModal} onClose={onToggleModal}>
                {/* eslint-disable-next-line i18next/no-literal-string */}
                {/* eslint-disable-next-line */}
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium atque deserunt exercitationem nemo, optio possimus veniam voluptates! Commodi deserunt dolorum exercitationem quaerat vero. Aliquid excepturi iste iure neque quod soluta.
            </Modal>
        </div>
    )
}
