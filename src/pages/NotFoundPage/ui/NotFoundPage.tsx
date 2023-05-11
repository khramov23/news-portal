import styles from './NotFoundPage.module.scss'
import { useTranslation } from 'react-i18next'
import { memo } from 'react'
import { Page } from '@/widgets/Page'
import { Text } from '@/shared/ui/Text/Text'

export const NotFoundPage = memo(() => {
    const { t } = useTranslation()

    return (
        <Page className={styles.notFoundPage}>
            <Text title={t('Страница не найдена')} />
        </Page>
    )
})
