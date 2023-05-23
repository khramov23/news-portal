import { memo } from 'react'

import { useTranslation } from 'react-i18next'

import { Text } from '@/shared/ui/Text'
import { Page } from '@/widgets/Page'

import styles from './NotFoundPage.module.scss'

export const NotFoundPage = memo(() => {
    const { t } = useTranslation()

    return (
        <Page className={styles.notFoundPage} data-testid={'NotFoundPage'}>
            <Text title={t('Страница не найдена')} />
        </Page>
    )
})
