import styles from './NotFoundPage.module.scss'
import { useTranslation } from 'react-i18next'

export const NotFoundPage = () => {
    const { t } = useTranslation()

    return (
        <h2 className={styles.notFoundPage}>
            {t('Страница не найдена')}
        </h2>
    )
}
