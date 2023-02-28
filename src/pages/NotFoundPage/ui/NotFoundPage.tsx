import styles from './NotFoundPage.module.scss'
import { useTranslation } from 'react-i18next'
import { memo } from 'react'

export const NotFoundPage = memo(() => {
    const { t } = useTranslation()

    return (
        <h2 className={styles.notFoundPage}>
            {t('Страница не найдена')}
        </h2>
    )
})
