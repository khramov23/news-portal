import { type FC } from 'react'

import styles from './LoginForm.module.scss'
import { cls } from 'shared/lib/classNames'
import { useTranslation } from 'react-i18next'
import { Button, ButtonTheme } from 'shared/ui/Button/Button'
import { Input } from 'shared/ui/Input/Input'

interface LoginFormProps {
    className?: string
}

export const LoginForm: FC<LoginFormProps> = ({ className }) => {
    const { t } = useTranslation()

    return (
        <div className={cls(styles.loginForm, className)}>
            <Input autoFocus={true} type="text" className={styles.input} placeholder={t('Введите username')}/>
            <Input type="text" className={styles.input} placeholder={t('Введите пароль')} />
            <Button theme={ButtonTheme.OUTLINE} className={styles.loginBtn}>{t('Войти')}</Button>
        </div>
    )
}
