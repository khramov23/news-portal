import { type FC, type FormEvent, memo, useCallback } from 'react'

import styles from './LoginForm.module.scss'
import { cls } from '@/shared/lib/classNames'
import { useTranslation } from 'react-i18next'
import { Button, ButtonTheme } from '@/shared/ui/Button/Button'
import { Input } from '@/shared/ui/Input/Input'
import { useSelector } from 'react-redux'
import { loginActions, loginReducer } from '../../model/slice/loginSlice'
import { loginByUsername } from '../../model/services/loginByUsername/loginByUsername'
import { Text, TextTheme } from '@/shared/ui/Text/Text'
import { getLoginPassword } from '../../model/selectors/getLoginPassword/getLoginPassword'
import { getLoginUsername } from '../..//model/selectors/getUsername/getLoginUsername'
import { getLoginError } from '../../model/selectors/getLoginError/getLoginError'
import { getLoginIsLoading } from '../../model/selectors/getLoginIsLoading/getLoginIsLoading'
import { DynamicModuleLoader, type ReducersList } from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import { useAppDispatch } from '@/shared/hooks/useAppDispatch'

export interface LoginFormProps {
    className?: string
    onLogin?: () => void
}

const initialReducers: ReducersList = {
    loginForm: loginReducer
}

const LoginForm: FC<LoginFormProps> = memo(({ className, onLogin }) => {
    const { t } = useTranslation()
    const dispatch = useAppDispatch()

    const username = useSelector(getLoginUsername)
    const password = useSelector(getLoginPassword)
    const error = useSelector(getLoginError)
    const isLoading = useSelector(getLoginIsLoading)

    const onFormSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
    }

    const onChangeUsername = useCallback((value: string) => {
        dispatch(loginActions.setUsername(value))
    }, [dispatch])

    const onChangePassword = useCallback((value: string) => {
        dispatch(loginActions.setPassword(value))
    }, [dispatch])

    const onLoginClick = useCallback(async () => {
        const result = await dispatch(loginByUsername({ username, password }))
        if (result.meta.requestStatus === 'fulfilled' && onLogin) {
            onLogin()
        }
    }, [dispatch, onLogin, password, username])

    return (
        <DynamicModuleLoader
            removeAfterUnmount={true}
            reducers={initialReducers}
        >
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
        </DynamicModuleLoader>
    )
})

export default LoginForm
