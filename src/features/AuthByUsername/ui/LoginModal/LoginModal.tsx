import { type FC, Suspense } from 'react'

import { cls } from '@/shared/lib/classNames'
import { Loader } from '@/shared/ui/Loader/Loader'
import { Modal } from '@/shared/ui/Modal/Modal'

import { LoginFormAsync } from '../LoginForm/LoginForm.async'

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
            <Suspense fallback={<Loader />}>
                <LoginFormAsync onLogin={onClose} />
            </Suspense>
        </Modal>
    )
}
