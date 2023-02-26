import { type FC, type FormEvent, memo, useCallback } from 'react'

import styles from './LoginForm.module.scss'
import { cls } from 'shared/lib/classNames'
import { useTranslation } from 'react-i18next'
import { Button, ButtonTheme } from 'shared/ui/Button/Button'
import { Input } from 'shared/ui/Input/Input'
import { useDispatch, useSelector } from 'react-redux'
import { loginActions } from '../../model/slice/loginSlice'
import { getLoginState } from '../../model/selectors/getLoginState/getLoginState'
import { loginByUsername } from '../../model/services/loginByUsername/loginByUsername'
import { Text, TextTheme } from 'shared/ui/Text/Text'

interface LoginFormProps {
    className?: string
}

export const LoginForm: FC<LoginFormProps> = memo(({ className }) => {
    const { t } = useTranslation()
    const dispatch = useDispatch()
    const { username, password, error, isLoading } = useSelector(getLoginState)

    const onFormSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
    }

    const onChangeUsername = useCallback((value: string) => {
        dispatch(loginActions.setUsername(value))
    }, [dispatch])

    const onChangePassword = useCallback((value: string) => {
        dispatch(loginActions.setPassword(value))
    }, [dispatch])

    const onLoginClick = useCallback(() => {
        dispatch(loginByUsername({ username, password }))
    }, [dispatch, password, username])

    return (
        <form onSubmit={onFormSubmit} className={cls(styles.loginForm, className)}>
            <Text title={t('Форма авторизации')} />
            {error && <Text theme={TextTheme.ERROR} text={t('Неправильный логин или пароль')} />}
            <Input
                onChange={onChangeUsername}
                autoFocus={true}
                type="text"
                className={styles.input}
                placeholder={t('Введите username')}
                value={username}
            />
            <Input
                onChange={onChangePassword}
                type="text"
                className={styles.input}
                placeholder={t('Введите пароль')}
                value={password}
            />
            <Button
                theme={ButtonTheme.OUTLINE}
                className={styles.loginBtn}
                onClick={onLoginClick}
                disabled={isLoading}
            >
                {t('Войти')}
            </Button>
        </form>
    )
})
