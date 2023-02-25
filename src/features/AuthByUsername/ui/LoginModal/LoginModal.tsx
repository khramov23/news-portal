import { type FC } from 'react'

import { cls } from 'shared/lib/classNames'
import { Modal } from 'shared/ui/Modal/Modal'
import { LoginForm } from '../LoginForm/LoginForm'

interface LoginModalProps {
    className?: string
    isOpen: boolean
    onClose: () => void
}

export const LoginModal: FC<LoginModalProps> = ({ className, isOpen, onClose }) => {
    return (
        <Modal
            className={cls(className)}
            onClose={onClose}
            isOpen={isOpen}
            lazy={true}
        >
            <LoginForm />
        </Modal>
    )
}
