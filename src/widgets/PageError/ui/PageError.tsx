import { type FC, memo } from 'react'

import { useTranslation } from 'react-i18next'

import { cls } from '@/shared/lib/classNames'
import { Button } from '@/shared/ui/Button/Button'

import styles from './PageError.module.scss'

interface PageErrorProps {
    className?: string
}

export const PageError: FC<PageErrorProps> = memo(({ className }) => {
    const { t } = useTranslation()

    const reload = () => {
        window.location.reload()
    }

    return (
        <div className={cls(styles.pageError, className)}>
            <h1>{t('Что-то пошло не так')}</h1>
            <Button onClick={reload}>{t('Обновить страницу')}</Button>
        </div>
    )
})
